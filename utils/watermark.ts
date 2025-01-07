export async function addWatermark(
  file: File,
  watermarkType: 'text' | 'image',
  watermarkContent: string | File,
  position: string,
  opacity: number,
  size: number,
  fontFamily: string,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  // For images, report immediate progress since it's a single operation
  if (!file.type.startsWith('video/')) {
    onProgress?.(0);
    const result = await processImage(file, watermarkType, watermarkContent, position, opacity, size, fontFamily);
    onProgress?.(100);
    return result;
  }
  
  return watermarkVideo(file, watermarkType, watermarkContent, position, opacity, size, fontFamily, onProgress);
}

async function watermarkVideo(
  videoFile: File,
  watermarkType: 'text' | 'image',
  watermarkContent: string | File,
  position: string,
  opacity: number,
  size: number,
  fontFamily: string,
  onProgress?: (progress: number) => void
): Promise<Blob> {
  return new Promise(async (resolve, reject) => {
    try {
      // Create video element
      const video = document.createElement('video');
      video.src = URL.createObjectURL(videoFile);
      await new Promise((res) => {
        video.onloadedmetadata = res;
      });

      // Get video dimensions
      const width = video.videoWidth;
      const height = video.videoHeight;

      // Create canvas for processing frames
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      canvas.width = width;
      canvas.height = height;

      // Create MediaRecorder to record the output
      const outputStream = canvas.captureStream();
      const mediaRecorder = new MediaRecorder(outputStream, {
        mimeType: 'video/webm',
        videoBitsPerSecond: 8000000 // 8Mbps
      });

      const chunks: Blob[] = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        resolve(blob);
      };

      // Prepare watermark
      let watermarkImg: HTMLImageElement | null = null;
      if (watermarkType === 'image') {
        watermarkImg = await loadWatermarkImage(watermarkContent as File);
      }

      // Start recording
      mediaRecorder.start();

      // Process video frames
      video.currentTime = 0;
      video.play();

      let lastDrawTime = 0;
      const frameInterval = 1000 / 30; // 30 FPS

      const processFrame = async (timestamp: number) => {
        if (timestamp - lastDrawTime >= frameInterval) {
          // Draw video frame
          ctx.drawImage(video, 0, 0, width, height);

          // Add watermark
          if (watermarkType === 'text') {
            addTextWatermark(ctx, watermarkContent as string, position, opacity, width, height, size, fontFamily);
          } else if (watermarkImg) {
            addImageWatermark(ctx, watermarkImg, position, opacity, width, height, size);
          }

          lastDrawTime = timestamp;
        }

        if (video.currentTime < video.duration) {
          requestAnimationFrame(processFrame);
        } else {
          video.pause();
          mediaRecorder.stop();
          URL.revokeObjectURL(video.src);
        }
      };

      requestAnimationFrame(processFrame);

      video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        onProgress?.(progress);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function addTextWatermark(
  ctx: CanvasRenderingContext2D,
  text: string,
  position: string,
  opacity: number,
  width: number,
  height: number,
  size: number,
  fontFamily: string
) {
  const padding = 20;
  ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  const fontSize = Math.max(20, Math.min(width * 0.3, height * 0.3) * size);
  ctx.font = `bold ${fontSize}px ${fontFamily}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';

  const textWidth = ctx.measureText(text).width;
  let x = 0;
  let y = 0;

  switch (position) {
    case 'top-left':
      x = textWidth / 2 + padding;
      y = padding + textWidth / 4;
      break;
    case 'top-right':
      x = width - textWidth / 2 - padding;
      y = padding + textWidth / 4;
      break;
    case 'bottom-left':
      x = textWidth / 2 + padding;
      y = height - padding - textWidth / 4;
      break;
    case 'bottom-right':
      x = width - textWidth / 2 - padding;
      y = height - padding - textWidth / 4;
      break;
    case 'center':
      x = width / 2;
      y = height / 2;
      break;
  }

  ctx.fillText(text, x, y);
}

function addImageWatermark(
  ctx: CanvasRenderingContext2D,
  watermarkImg: HTMLImageElement,
  position: string,
  opacity: number,
  width: number,
  height: number,
  size: number
) {
  const padding = 20;
  const maxDimension = Math.min(width, height);
  const maxWatermarkSize = maxDimension * 0.8; // 80% of the smaller dimension
  const scale = (maxWatermarkSize * size) / Math.max(watermarkImg.width, watermarkImg.height);
  const watermarkWidth = watermarkImg.width * scale;
  const watermarkHeight = watermarkImg.height * scale;

  let x = 0;
  let y = 0;

  switch (position) {
    case 'top-left':
      x = padding;
      y = padding;
      break;
    case 'top-right':
      x = width - watermarkWidth - padding;
      y = padding;
      break;
    case 'bottom-left':
      x = padding;
      y = height - watermarkHeight - padding;
      break;
    case 'bottom-right':
      x = width - watermarkWidth - padding;
      y = height - watermarkHeight - padding;
      break;
    case 'center':
      x = (width - watermarkWidth) / 2;
      y = (height - watermarkHeight) / 2;
      break;
  }

  ctx.globalAlpha = opacity;
  ctx.drawImage(watermarkImg, x, y, watermarkWidth, watermarkHeight);
  ctx.globalAlpha = 1;
}

async function loadWatermarkImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
} 

async function processImage(
  file: File,
  watermarkType: 'text' | 'image',
  watermarkContent: string | File,
  position: string,
  opacity: number,
  size: number,
  fontFamily: string
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        // Load main image
        const img = new Image();
        img.src = e.target?.result as string;
        await new Promise((res) => { img.onload = res; });

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          throw new Error('Could not get canvas context');
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        if (watermarkType === 'text') {
          addTextWatermark(
            ctx, 
            watermarkContent as string, 
            position, 
            opacity, 
            img.width, 
            img.height, 
            size,
            fontFamily
          );
        } else if (watermarkContent instanceof File) {
          // Load watermark image
          const watermarkImg = await loadWatermarkImage(watermarkContent);
          addImageWatermark(ctx, watermarkImg, position, opacity, img.width, img.height, size);
        }

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to create image blob'));
            }
          },
          file.type || 'image/png'
        );
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

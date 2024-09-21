import * as htmlToImage from "html-to-image";

export async function getDataURLFromHTMLDOM(
  domElement: HTMLElement
): Promise<string> {
  return htmlToImage.toPng(domElement);
}

export function downloadImage(fileName: string, dataURL: string) {
  const anchor = document.createElement("a");
  anchor.href = dataURL;
  anchor.download = fileName;

  anchor.click();
}

export function copyDataURL(dataURL: string) {
    const blob = dataURLToBlob(dataURL);
    const clipboardItem = new ClipboardItem({ 'image/png': blob });
    return navigator.clipboard.write([clipboardItem]);
}

export function dataURLToBlob(dataUrl: string) {
  const parts = dataUrl.split(",");
  const mime = 'image/png';
  const bstr = atob(parts[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
}

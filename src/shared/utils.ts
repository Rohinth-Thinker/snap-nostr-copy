import * as htmlToImage from 'html-to-image';

export async function getDataURLFromHTMLDOM(domElement: HTMLElement): Promise<string> {
    return htmlToImage.toPng(domElement);
}

export function downloadImage(fileName: string, dataURL: string) {
    const anchor = document.createElement('a');
    anchor.href = dataURL;
    anchor.download = fileName;

    anchor.click();
}
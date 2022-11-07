const pinBody = () => document.body.classList.add('body--overflow');
const unPinBody = () => document.body.classList.remove('body--overflow');
const togglePinBody = () => document.body.classList.toggle('body--overflow');
const getWindowWidth = (): number => document.documentElement.clientWidth;
const download = (blob: Blob, fileName: string): void => {
    const linkToDownload = document.createElement('a');
    linkToDownload.download = fileName;
    linkToDownload.href = URL.createObjectURL(blob);

    document.body.appendChild(linkToDownload);

    linkToDownload.click();
    linkToDownload.remove();
};

export {
    pinBody,
    unPinBody,
    togglePinBody,
    getWindowWidth,
    download
}
export const handleFileChange = (event, file, setFile, setExternal) => {
    const input = event.target;
    console.log(event.target, file);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                let newFile;
                if (file.type === "image/webp") {
                    newFile = file;
                } else {
                    const dataUrl = canvas.toDataURL("image/webp", 0.8);
                    newFile = dataURLtoFile(dataUrl, file.name + ".webp");
                }
                console.log(newFile);
                setFile({
                    preview: URL.createObjectURL(newFile),
                    raw: newFile,

                });
                if (setExternal) {
                    console.log('inside external');
                    setExternal(newFile)
                }

            };
            img.src = reader.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
};

const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
};
const file_name = 'file-list.html'
const span_err = document.getElementById('err');
const fileListElement = document.getElementById('file-list');

// 顯示錯誤訊息的函式
const showError = (message) => {
    // fileListElement.innerHTML = ''; // 清空載入中提示

    // const newItem = document.createElement('li');
    // newItem.textContent= `${message}`;

    // fileListElement.appendChild(newItem);

    err.innerHTML += `${message} <br />`;
};

// 動態生成檔案列表的函式
const populateFileList = (files) => {
    fileListElement.innerHTML = ''; // 清空載入中提示

    files.forEach(file => {
        const hyperlink = document.createElement('a');

        hyperlink.title= file;
        hyperlink.href= file;
        hyperlink.textContent = file;

        const newItem = document.createElement('li');
        newItem.appendChild(hyperlink);

        // 將 <li> 元素添加到 <ul> 中
        fileListElement.appendChild(newItem);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    span_err.innerHTML = "";
    
    // 讀取並處理檔案清單
    fetch(file_name)
    .then(response => {
        if (!response.ok) {
            showError(`L43: 無法讀取檔案: ${file_name}`);

            // throw new Error('無法讀取檔案');
        }
        return response.text();
    })
    .then(data => {
        const files = data.trim().split('\n');
        if (files.length === 0) {
            showError('L52: 檔案清單為空');
        }
        populateFileList(files);
    })
    .catch(error => {
        showError(`L57: 讀取檔案清單失敗: ${error} <br/>${file_Name}`);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const file_name='file-list.html'
    const fileListElement = document.getElementById('file-list');
  
    // 顯示錯誤訊息的函式
    const showError = (message) => {
        fileListElement.innerHTML = `<li>${message}</li>`;
    };

    // 動態生成檔案列表的函式
    const populateFileList = (files) => {
        fileListElement.innerHTML = ''; // 清空載入中提示
        files.forEach(file => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${file}">${file}</a>`;
            fileListElement.appendChild(listItem);
        });
    };

    // 讀取並處理檔案清單
    fetch(file_name)
        .then(response => {
            if (!response.ok) {
                throw new Error('無法讀取檔案');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('#file-list2').innerHTML = "Test123";
          
            const files = data.trim().split('\n');
            if (files.length === 0) {
                throw new Error('檔案清單為空');
            }
            populateFileList(files);
        })
        .catch(error => {
            console.error('讀取檔案清單失敗:', error);
            showError('無法載入檔案列表');
        });
});

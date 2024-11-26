const fileList = document.getElementById('file-list');


const file_name='file-list.html'

// 使用 fetch 動態加載 file-list.html
fetch(file_name)
  .then(response => response.text())
  .then(data => {
      // 將檔案清單分割成陣列
      const files = data.trim().split('\n');
    
      // 清空預設的 "檔案列表正在載入中..."
      fileList.innerHTML = '';
    
      // 生成列表項目
      files.forEach(file => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = file;
          link.textContent = file;
          listItem.appendChild(link);
          fileList.appendChild(listItem);
      });
  })
  .catch(error => {
      console.error('載入檔案列表時發生錯誤:', error);
      fileList.innerHTML = '<li>無法載入檔案列表</li>';
  });

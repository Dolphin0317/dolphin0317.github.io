// 使用 fetch 動態加載 file-list.html
let file_name='file-list.txt'

fetch(file_name)
  .then(response => response.text())
  .then(data => {
      // 將檔案清單分割成陣列
      const files = data.trim().split('\n');
      const fileList = document.getElementById('file-list');
    
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
      document.querySelector('.file-list ul').innerHTML = '<li>無法載入檔案列表。</li>';
  });

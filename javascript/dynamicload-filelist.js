// 使用 fetch 動態加載 file-list.html
let file_name='file-list.txt'

fetch(file_name)
  .then(response => response.text())
  .then(data => {
      document.querySelector('.file-list ul').innerHTML = data;
  })
  .catch(error => {
      console.error('載入檔案列表時發生錯誤:', error);
      document.querySelector('.file-list ul').innerHTML = '<li>無法載入檔案列表。</li>';
  });

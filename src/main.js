const $sieList = $('.siteList')
const $lastLi = $sieList.find('li.last')

const mylink = JSON.parse(localStorage.getItem('mylink'))

// 如果mylink不存在 hasMap就取后面的值
const hasMap = mylink || [
  {logo: 'B', logoType: 'image', url: './images/bili.png'},
  {logo: 'U', logoType: 'text', url: 'http://www.ui.cn'},
  {logo: 'D', logoType: 'text', url: 'https://dribbble.com/dsf'},
  {logo: 'G', logoType: 'text', url: 'https://gitee.com/dfs'},
  {logo: 'I', logoType: 'text', url: 'https://www.iconfont.cn/a/d/s'},
  {logo: 'V', logoType: 'text', url: 'https://cn.vuejs.org'},
  {logo: 'E', logoType: 'text', url: 'https://element.eleme.cn'},
]
const simplifyUrl = (url) => {//https:qq.com.cn
   let url1=url.replace('https://', '')
    .replace('http://', '')
    .replace('https://www.', '')
    .replace('http://www.', '')// cn.vuejs.org   ui.cn/sddf/sdf
  let xie=url1.indexOf('/') //3 -1
  if(xie!=-1){
  return  url1.substring(0,xie)
  }
  return url1
}
const render = () => {
  $sieList.find('li:not(.last)').remove()
  hasMap.forEach(node => {
    const $li = $(`<li>
      <a href="${node.url}">
        <div class="site">
          <div class="logo">${node.logo}</div>
          <div class="link">${simplifyUrl(node.url)}</div>
        </div>
      </a>
    </li>`).insertBefore($lastLi)
  })
}

render()

$('.iconButton')
  .on('click', () => {
    let url = window.prompt('请问你要输入的网址是')
    let url1
    if (url.indexOf('http') !== 0) {
      url1 = 'https://' + url
    }
    hasMap.push({
      logo: url[0].toUpperCase(),
      logoType: 'text',
      url: url1
    })
    render()
  })

window.onbeforeunload = () => {
  console.log('页面要关闭了')
  const string = JSON.stringify(hasMap)
  localStorage.setItem('mylink', string)
}
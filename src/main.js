const $sieList = $('.siteList')
const $lastLi = $sieList.find('li.last')


const hasMap = [
  {logo: 'A', logoType: 'text', url: 'https://www.acfun.cn/'},
  {logo: 'B', logoType: 'img', url: './images/bili.png'},
  {logo: 'U', logoType: 'text', url: 'http://www.ui.cn/'},
  {logo: 'D', logoType: 'text', url: 'https://dribbble.com/'},
  {logo: 'G', logoType: 'text', url: 'https://gitee.com/'},
  {logo: 'I', logoType: 'text', url: 'https://www.iconfont.cn/'},
  {logo: 'V', logoType: 'text', url: 'https://cn.vuejs.org/'},
  {logo: 'E', logoType: 'text', url: 'https://element.eleme.cn/'},
]

console.log(hasMap)

hasMap.forEach(node => {
  const li = $(`<li>
      <a
        href="${node.url}">
        <div class="site">
          <div class="logo">${node.logo}</div>
          <div class="link">${node.url}</div>
        </div>
      </a>
    </li>`).insertBefore($lastLi)
})

$('.iconButton')
  .on('click', () => {
      let url = window.prompt('请问你要输入的网址是')
      if (url.indexOf('http') !== 0) {
        url = 'https://' + url
      }
      hasMap.push({
        logo: url[0],
        logoType: 'text',
        url: url
      })
    })

$sieList.find('li:not(.last)').remove()
hasMap.forEach(node => {
  const li = $(`<li>
      <a
        href="${node.url}">
        <div class="site">
          <div class="logo">${node.logo}</div>
          <div class="link">${node.url}</div>
        </div>
      </a>
    </li>`).insertBefore($lastLi)
})
//styled-components 只引用自己需要的样式
import {injectGlobal} from 'styled-components'
injectGlobal`
    @font-face {
      font-family: "iconfont";
      src: url('./iconfont.eot?t=1537595348012'); /* IE9*/
      src: url('./iconfont.eot?t=1537595348012#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAV4AAsAAAAAB+wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8i0gqY21hcAAAAYAAAABgAAABnLPFG7BnbHlmAAAB4AAAAZQAAAGsetmO8mhlYWQAAAN0AAAALwAAADYStzWhaGhlYQAAA6QAAAAcAAAAJAfeA4VobXR4AAADwAAAAA4AAAAQEAAAAGxvY2EAAAPQAAAACgAAAAoBIACObWF4cAAAA9wAAAAeAAAAIAESADxuYW1lAAAD/AAAAUUAAAJtPlT+fXBvc3QAAAVEAAAAMwAAAERemMV6eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeiT6zYG7438AQw9zA0AAUZgTJAQDjBgwweJztkLENgDAMBM84oAjRsgUlijIPFZN7jeA4FAzBW2e9X1GKB2ZAncNJIDdC1+WpRK6skSeK39lnAtutWG3t60ISL7K7yb3/LAu/ttjne2lvbRBdlkHv2+oAfQCqURM2eJw1zs9qE1EYBfDvfHfu3DQdJ6XJZBo7iU2uudOANCF/RTSxYDFaSRBFlBRTCs2irkS3Ltw0bZ9B8CF8gah0URcuupAuunAl9CWmHRE5u8OB8yOL6PJSzASRohTdpCpRUYdFpdFICxNqWwnZbtTz0C1t65JpNXto6pLyXXiZbKPevgeeTfrR2cYuUjsP3kibpdrDWa377jaK62udvdf371THq/mV6+Xa6amgqILegtHp6KsM3h9X27XKC9fZLL+UQc4L6uUCEXFs+iheiQ/kkiHqAT3chQ6N7aUA306xbapIm07cdzl7AwWo6DNEroVDcIujP78d7zwR1BOcYwfLsjm/Eq4uHpSz3rW3mN0agYcARla0dJRJfmKVDxJw/AwukqPFpXk7OfCH5p+DSPT5nPJUIYJtQtPudOHHf372bzzlQscYNqqLzhpCF6oA3tr5tbHuPBn+eDpYeDy3vS0tBiwhk1J8l18m+0JMJ7tT5inmBsvPnp9s9vnho59bifFYKmkJSzIEf7NKPJ38H8eSK5UTTJt4nGNgZGBgAOJJHbe/xPPbfGXgZmEAgeunf1xG0P8bWRiYa4FcDgYmkCgAiX4NggB4nGNgZGBgbvjfwBDDwgACQJKRARWwAABHCgJteJxjYWBgYEHCAACwABEAAAAAAAAASgCOANYAAHicY2BkYGBgYTAAYhBgAmIuIGRg+A/mMwAADcIBTwAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAhZGJkZmRhZGVgckxkSczOT9PNzkjNTk7M4+tOL+0uDSfgQEAbK8IMgA=') format('woff'),
      url('./iconfont.ttf?t=1537595348012') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1537595348012#iconfont') format('svg'); /* iOS 4.1- */
    }
    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`
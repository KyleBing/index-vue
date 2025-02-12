#!/bin/bash
cd /usr/share/nginx/html &&
rm -Rf index/* &&
mv index-* index &&
cd index &&
unzip index-* &&
rm -f index-*
echo 'Index deploy finished.'


## 仅供我自己个人使用，并不通用

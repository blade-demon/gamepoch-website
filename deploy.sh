#!/bin/bash
# 说明：该脚本用于启动staticnginx服务器，模拟线上www.gamepoch.com

docker run \
 --name gamepoch-website-nginx \
 -d -p 8080:80 \
 -v /Users/xuziwei/Desktop/webapp-scafford/build:/usr/share/nginx/html:rw \
 -v /Users/xuziwei/Desktop/webapp-scafford/config/nginx.conf:/etc/nginx/nginx.conf:rw \
 -v /Users/xuziwei/Desktop/webapp-scafford/config/default.conf:/etc/nginx/conf.d/default.conf:rw \
 nginx

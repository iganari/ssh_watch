# about ssh_watch


## node.jsをインストールする

```
# su -
# yum install nodejs npm --enablerepo=epel
```

## npmを用いてhipchatterをインストール

```
# mkdir /etc/nodejs/
# npm init
# npm install hipchatter --save
```

## gitからプロジェクトをクローン

```
# cd /etc/nodejs/
# git clone git@github.com:iganari/ssh_watch.git
```

## sshdのためのシェルスクリプトの実行

```
# cd /etc/nodejs/ssh_watch
# sh installation.sh
```



#!/bin/bash
#
# created 2014/08/12

HOSTNAME=`hostname`

sed -i "s/$HOSTNAME/hostname/g" /etc/nodejs/ssh_watch/run/send_msg-ssh_login.js

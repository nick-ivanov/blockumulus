MASTER_USER=blockumulus
MASTER_PWD=
MASTER_HOME=/home/blockumulus

NODE1_HOST=52.188.62.238
NODE2_HOST=13.82.136.48
NODE3_HOST=13.90.35.55
NODE4_HOST=40.121.34.190
NODE5_HOST=52.188.145.50
NODE6_HOST=13.92.40.188
NODE7_HOST=40.88.14.56
NODE8_HOST=40.88.2.11

CPOOL1_HOST=52.255.170.38
CPOOL2_HOST=20.185.91.51
CPOOL3_HOST=138.91.114.231
CPOOL4_HOST=52.152.226.233
CPOOL5_HOST=52.249.249.9
CPOOL6_HOST=23.100.17.71
CPOOL7_HOST=40.121.8.180
CPOOL8_HOST=40.88.131.240

deployone:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE1_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deploytwo:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE2_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deploythree:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE3_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deployfour:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE4_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deployfive:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE5_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deploysix:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE6_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deployseven:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE7_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deployeight:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(NODE8_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install body-parser'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && npm install express'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && chmod a+x *.sh'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

# === CLIENT POOLS ===

deploycpone:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL1_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL1_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL1_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL1_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL1_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL1_HOST) 'cd /$(MASTER_HOME)/blockumulus/client && chmod +x *.sh'

deploycptwo:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL2_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL2_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL2_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL2_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL2_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'

deploycpthree:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL3_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL3_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL3_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL3_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL3_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'

deploycpfour:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL4_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL4_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL4_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL4_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL4_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'

deploycpfive:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL5_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL5_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL5_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL5_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL5_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'

deploycpsix:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL6_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL6_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL6_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL6_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL6_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'

deploycpseven:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL7_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL7_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL7_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL7_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL7_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'

deploycpeight:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL8_HOST) 'rm -fr $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL8_HOST) 'mkdir $(MASTER_HOME)/blockumulus'
	sshpass -p$(MASTER_PWD) scp -r * $(MASTER_USER)@$(CPOOL8_HOST):/$(MASTER_HOME)/blockumulus
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL8_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install web3'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(CPOOL8_HOST) 'cd /$(MASTER_HOME)/blockumulus/api && npm install node-rest-client'



# ==== RESTART CELLS ====

restartone:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE1_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &

restarttwo:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE2_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &

restartthree:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE3_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &

restartfour:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE4_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &

restartfive:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE5_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &

restartsix:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE6_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &

restartseven:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE7_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &

restarteight:
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'echo `sudo killall node`'
	sshpass -p$(MASTER_PWD) ssh $(MASTER_USER)@$(NODE8_HOST) 'cd /$(MASTER_HOME)/blockumulus/cell && ./launch-cells.sh' &


deploycells: deployone deploytwo deploythree deployfour deployfive deploysix deployseven deployeight

deployclients: deploycpone deploycptwo deploycpthree deploycpfour deploycpfive deploycpsix deploycpseven deploycpeight

restartcells: restartone restarttwo restartthree restartfour restartfive restartsix restartseven restarteight

deploy: deploycells deployclients

# IMCMD - Interactive MCMD
CLI tool for shaping and processing csv file interactively.

## Features
* High speed processing by using [MCMD](http://www.nysol.sakura.ne.jp/mcmd2/en/sect-whatis.html)
* Generally compatible options with MCMD

## Required tools
### mcmd
refer [Installation page](http://www.nysol.jp/en/home/install)
### peco
`brew install peco` or `choco install peco` or [download here](https://github.com/peco/peco/releases)!

[peco official page](https://github.com/peco/peco)

## Installation

```Shell
$ git clone https://github.com/mpppk/imcmd.git
$ cd imcmd & npm install -g .

# We'll provide IMCMD via npm in few days!
$ npm install -g imcmd
```

## Commands
In the following command description, the `mdata` command is used to generate data.  
For details, please check [here](http://www.nysol.sakura.ne.jp/mcmd2/en/sect-mdata.html).

### imcut
*Select column interactively*

#### -r
Field removal switch

#### Example
```Shell
$ mdata iris | head -3
SepalLength,SepalWidth,PetalLength,PetalWidth,Species
5.1,3.5,1.4,0.2,setosa
4.9,3,1.4,0.2,setosa

$ mdata iris | imcut | head -3
#### interactive selection ####
SepalWidth,PetalLength
3.5,1.4
3,1.4
```

![imcut demo gif](imgs/imcut_demo.gif)

source /opt/boxen/env.sh

PATH=$PATH:/opt/boxen/nodenv/versions/v0.10/bin:bin:/opt/boxen/rbenv/shims:/opt/boxen/rbenv/bin:/opt/boxen/rbenv/plugins/ruby-build/bin:node_modules/.bin:/opt/boxen/nodenv/shims:/opt/boxen/nodenv/bin:/opt/boxen/bin:/opt/boxen/homebrew/bin:/opt/boxen/homebrew/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/opt/X11/bin:/usr/local/MacGPG2/bin:/opt/boxen/nodenv/versions/v0.10/bin:./node_modules/.bin

source $HOME/.dotfiles/functions.sh
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
source $HOME/.dotfiles/shell-colors.sh

export PS1="\n\W $ "

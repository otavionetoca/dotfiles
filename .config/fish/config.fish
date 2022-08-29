set -x PATH $PATH $HOME/.config/lsp/lua-language-server/bin

function fcd
    cd (fd . --type d $argv | fzf) && tmux new-session -As (pwd | sed "s/.*///")
end

if status is-interactive
	if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
		exec startx -- -keeptty
	end
end

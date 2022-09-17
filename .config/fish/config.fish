function fcd
    cd (fd . --type d $argv | fzf) && tmux new-session -As (pwd | sed "s/.*///")
end

export GOPATH=/home/netoca/go/
export PATH="$PATH:$HOME/go/bin"

if status is-interactive
	if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
		exec startx -- -keeptty
	end
end

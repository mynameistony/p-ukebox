#!/bin/bash

#echo "Bash: $@"

case $@ in
	"togglePlay")
		mpc toggle
	;;

	"previousSong")	
		mpc prev
	;;

	"nextSong")
		mpc next
	;;

	"showArtists")
	echo "add to backend";;

	"showTracks")
	echo "add to backend";;

	"showGenres")
	echo "add to backend";;
esac
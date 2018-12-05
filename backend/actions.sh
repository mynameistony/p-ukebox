#!/bin/bash

#echo "Bash: $@"

case $@ in
	"showInfo")
		mpc -f "%title% by %artist%" | head -n 1
	;;

	"togglePlay")
		mpc -f "%title% by %artist%" toggle | head -n 1
	;;

	"previousSong")	
		mpc -f "%title% by %artist%" prev | head -n 1
	;;

	"nextSong")
		mpc -f "%title% by %artist%" next | head -n 1
	;;

	"showArtists")
		mpc list artist
	;;

	"showTracks")
		mpc list title
	;;

	"showGenres")
		mpc list genre
	;;
esac
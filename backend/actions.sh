#!/bin/bash

#echo "Bash: $@"


case $@ in

	"showInfo")
		#mpc -f "%title% by %artist%" | head -n 1
	;;


	"togglePlay")
		mpc -q toggle | head -n 1
	;;

	"toggleRandom")
		mpc -q random
	;;

	"toggleRepeat")
		mpc -q repeat
	;;

	"previousSong")	
		mpc -q prev | head -n 1
	;;

	"nextSong")
		mpc -q next | head -n 1
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

	*)
		if [ $@ -gt 0 ];then
			if [ $@ -lt 100 ];then
				mpc -q volume "$@"
			fi
		fi
	;;

esac

repeatState=$(mpc | grep "repeat: [a-z]*" -o | sed s/"repeat: "//)
randomState=$(mpc | grep "random: [a-z]*" -o | sed s/"random: "//)
currentTitle=$(mpc -f "%title%" | head -n 1)
currentArtist=$(mpc -f "%artist%" | head -n 1)
currentVolume=$(mpc | grep "volume: [0-9]*%" -o | sed s/"volume: "// | sed s/"%"//)

echo "{\"currentTitle\":\"$currentTitle\",\"currentArtist\": \"$currentArtist\",\"currentVolume\": \"$currentVolume\", \"repeatState\": \"$repeatState\", \"randomState\": \"$randomState\"}"
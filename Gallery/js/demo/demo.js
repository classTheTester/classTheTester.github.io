/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
/* global blueimp, $ */
$(function() {
    'use strict'
  
            // Initialize the Gallery as image carousel:
       
		

        blueimp.Gallery([

            {
                title: 'Splash Page',
                href: 'img/brewchat (4).png',
                type: 'image/png',
            },
            
            
        {
            title: 'Saving Details of Interviewer',
            href: 'img/brewchat (1).png',
            type: 'image/png',
        },
        {
            title: 'Summary Screen',
            href: 'img/brewchat (3).png',
            type: 'image/png',
        },
        
        {
            title: 'Conducted Interviews',
            href: 'img/brewchat (6).png',
            type: 'image/png',
        }

    ], {
        container: '#blueimp-image-carousel-accutrack',
        carousel: true,
        startSlideshow: true,
        preloadRange: 2
        
    })


		
		
	  blueimp.Gallery([{
                title: 'Splash Screen',
				href: 'img/blackjack (1).png',
                type: 'image/png',
            },
            {
                title: 'Game Screen',
                href: 'img/blackjack (2).png',
                type: 'image/png',
            }
			,
            {
                title: 'Dealer Win',
                href: 'img/blackjack (3).png',
                type: 'image/png',
            }
			,
            {
                title: 'Player win',
                href: 'img/blackjack (5).png',
                type: 'image/png',
            }
			,
            {
                title: 'Game over screen',
                href: 'img/blackjack (4).png',
                type: 'image/png',
            }
		
        ], {
            container: '#blueimp-image-carousel-seeme',
            carousel: true,
			startSlideshow: true,
			preloadRange: 2
			
        })
		
		
		
		 blueimp.Gallery([{
                title: 'Blitz Mode',
                href: 'img/typingapp (1).png',
                type: 'image/jpeg',
            },
            {
                title: 'Score board',
                href: 'img/typingapp (2).png',
                type: 'image/jpeg',
            },
			 {
                title: 'Username and score saving',
                href: 'img/typingapp (3).png',
                type: 'image/jpeg',
            },
			 {
                title: 'Classic mode',
                href: 'img/typingapp (4).png',
                type: 'image/png',
            },
			 {
                title: 'The team',
                href: 'img/typingapp (5).png',
                type: 'image/jpeg',
            },
        ], {
            container: '#blueimp-image-carousel2',
            carousel: true,
			preloadRange: 2
        })
		
		
		
		 blueimp.Gallery([{
               title: 'Splash Screen',
                href: 'img/wop (5).png ',
                type: 'image/jpeg',
            },
            {
                title: 'Map Selection ',
                href: 'img/wopmenu.jpeg',
                type: 'image/jpeg'
            },
			{
                title: 'Beach Map',
                href: 'img/wop (3).png',
                type: 'image/jpeg'
            },
						{
                title: 'House Map',
                href: 'img/wop (13).png',
                type: 'image/jpeg'
            }
			,
						{
                title: 'Forest Map',
                href: 'img/wop (14).png',
                type: 'image/jpeg'
            }
            ,
            {
                title: 'End Screen',
                href: 'img/wop1 (2).png',
                type: 'image/jpeg'
            }
        ], {
            container: '#blueimp-image-carousel3',
            carousel: true,
			preloadRange: 2
        })
		
		
		
					
})

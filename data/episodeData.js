const episodeData = [
    {
    Season: 1,
    EpisodeNo: 1,
    Title: "Good News, Bad News",
    AirDate: "July 5, 1989",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Art Wolff",
    SEID: "S01E01"
    },
    {
    Season: 1,
    EpisodeNo: 1,
    Title: "The Stakeout",
    AirDate: "May 31, 1990",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S01E01"
    },
    {
    Season: 1,
    EpisodeNo: 2,
    Title: "The Robbery",
    AirDate: "June 7, 1990",
    Writers: "Matt Goldman",
    Director: "Tom Cherones",
    SEID: "S01E02"
    },
    {
    Season: 1,
    EpisodeNo: 3,
    Title: "Male Unbonding",
    AirDate: "June 14, 1990",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S01E03"
    },
    {
    Season: 1,
    EpisodeNo: 4,
    Title: "The Stock Tip",
    AirDate: "June 21, 1990",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S01E04"
    },
    {
    Season: 2,
    EpisodeNo: 1,
    Title: "The Ex-Girlfriend",
    AirDate: "January 16, 1991",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S02E01"
    },
    {
    Season: 2,
    EpisodeNo: 2,
    Title: "The Pony Remark",
    AirDate: "January 30, 1991",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S02E02"
    },
    {
    Season: 2,
    EpisodeNo: 3,
    Title: "The Jacket",
    AirDate: "February 6, 1991",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S02E03"
    },
    {
    Season: 2,
    EpisodeNo: 4,
    Title: "The Phone Message",
    AirDate: "February 13, 1991",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S02E04"
    },
    {
    Season: 2,
    EpisodeNo: 5,
    Title: "The Apartment",
    AirDate: "April 4, 1991",
    Writers: "Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S02E05"
    },
    {
    Season: 2,
    EpisodeNo: 6,
    Title: "The Statue",
    AirDate: "April 11, 1991",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S02E06"
    },
    {
    Season: 2,
    EpisodeNo: 7,
    Title: "The Revenge",
    AirDate: "April 18, 1991",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S02E07"
    },
    {
    Season: 2,
    EpisodeNo: 8,
    Title: "The Heart Attack",
    AirDate: "April 25, 1991",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S02E08"
    },
    {
    Season: 2,
    EpisodeNo: 9,
    Title: "The Deal",
    AirDate: "May 2, 1991",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S02E09"
    },
    {
    Season: 2,
    EpisodeNo: 10,
    Title: "The Baby Shower",
    AirDate: "May 16, 1991",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S02E10"
    },
    {
    Season: 2,
    EpisodeNo: 11,
    Title: "The Chinese Restaurant",
    AirDate: "May 23, 1991",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S02E11"
    },
    {
    Season: 2,
    EpisodeNo: 12,
    Title: "The Busboy",
    AirDate: "June 26, 1991",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S02E12"
    },
    {
    Season: 3,
    EpisodeNo: 1,
    Title: "The Note",
    AirDate: "September 18, 1991",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E01"
    },
    {
    Season: 3,
    EpisodeNo: 2,
    Title: "The Truth",
    AirDate: "September 25, 1991",
    Writers: "Elaine Pope",
    Director: "David Steinberg",
    SEID: "S03E02"
    },
    {
    Season: 3,
    EpisodeNo: 3,
    Title: "The Pen",
    AirDate: "October 2, 1991",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E03"
    },
    {
    Season: 3,
    EpisodeNo: 4,
    Title: "The Dog",
    AirDate: "October 9, 1991",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E04"
    },
    {
    Season: 3,
    EpisodeNo: 5,
    Title: "The Library",
    AirDate: "October 16, 1991",
    Writers: "Larry Charles",
    Director: "Joshua White",
    SEID: "S03E05"
    },
    {
    Season: 3,
    EpisodeNo: 6,
    Title: "The Parking Garage",
    AirDate: "October 30, 1991",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E06"
    },
    {
    Season: 3,
    EpisodeNo: 7,
    Title: "The Cafe",
    AirDate: "November 6, 1991",
    Writers: "Tom Leopold",
    Director: "Tom Cherones",
    SEID: "S03E07"
    },
    {
    Season: 3,
    EpisodeNo: 8,
    Title: "The Tape",
    AirDate: "November 13, 1991",
    Writers: "Larry David and Bob Shaw, Don McEnery",
    Director: "David&nbsp; Steinberg",
    SEID: "S03E08"
    },
    {
    Season: 3,
    EpisodeNo: 9,
    Title: "The Nose Job",
    AirDate: "November 20, 1991",
    Writers: "Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S03E09"
    },
    {
    Season: 3,
    EpisodeNo: 10,
    Title: "The Stranded",
    AirDate: "November 27, 1991",
    Writers: "Larry David, Jerry Seinfeld and Matt Goldman",
    Director: "Tom Cherones",
    SEID: "S03E10"
    },
    {
    Season: 3,
    EpisodeNo: 11,
    Title: "The Alternate Side",
    AirDate: "December 4, 1991",
    Writers: "Larry David and Bill Masters",
    Director: "Tom Cherones",
    SEID: "S03E11"
    },
    {
    Season: 3,
    EpisodeNo: 12,
    Title: "The Red Dot",
    AirDate: "December 11, 1991",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E12"
    },
    {
    Season: 3,
    EpisodeNo: 13,
    Title: "The Subway",
    AirDate: "January 8, 1992",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E13"
    },
    {
    Season: 3,
    EpisodeNo: 14,
    Title: "The Pez Dispenser",
    AirDate: "January 15, 1992",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E14"
    },
    {
    Season: 3,
    EpisodeNo: 15,
    Title: "The Suicide",
    AirDate: "January 29, 1992",
    Writers: "Tom Leopold",
    Director: "Tom Cherones",
    SEID: "S03E15"
    },
    {
    Season: 3,
    EpisodeNo: 16,
    Title: "The Fix-Up",
    AirDate: "February 5, 1992",
    Writers: "Elaine Pope, Larry Charles",
    Director: "Tom Cherones",
    SEID: "S03E16"
    },
    {
    Season: 3,
    EpisodeNo: 17,
    Title: "The Boyfriend (1)",
    AirDate: "February 12, 1992",
    Writers: "Larry David and Larry Levin",
    Director: "Tom Cherones",
    SEID: "S03E17"
    },
    {
    Season: 3,
    EpisodeNo: 18,
    Title: "The Boyfriend (2)",
    AirDate: "February 12, 1992",
    Writers: "Larry David and Larry Levin",
    Director: "Tom Cherones",
    SEID: "S03E18"
    },
    {
    Season: 3,
    EpisodeNo: 19,
    Title: "The Limo",
    AirDate: "February 26, 1992",
    Writers: "Larry Charles / Story By Marc Jaffe",
    Director: "Tom Cherones",
    SEID: "S03E19"
    },
    {
    Season: 3,
    EpisodeNo: 20,
    Title: "The Good Samaritan",
    AirDate: "March 4, 1992",
    Writers: "Peter Mehlman",
    Director: "Jason Alexander",
    SEID: "S03E20"
    },
    {
    Season: 3,
    EpisodeNo: 21,
    Title: "The Letter",
    AirDate: "March 25, 1992",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S03E21"
    },
    {
    Season: 3,
    EpisodeNo: 22,
    Title: "The Parking Space",
    AirDate: "April 22, 1992",
    Writers: "Larry David and Greg Daniels",
    Director: "Tom Cherones",
    SEID: "S03E22"
    },
    {
    Season: 3,
    EpisodeNo: 23,
    Title: "The Keys",
    AirDate: "May 6, 1992",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S03E23"
    },
    {
    Season: 4,
    EpisodeNo: 1,
    Title: "The Trip (1)",
    AirDate: "August 12, 1992",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E01"
    },
    {
    Season: 4,
    EpisodeNo: 2,
    Title: "The Trip (2)",
    AirDate: "August 19, 1992",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E02"
    },
    {
    Season: 4,
    EpisodeNo: 3,
    Title: "The Pitch",
    AirDate: "September 16, 1992",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E03"
    },
    {
    Season: 4,
    EpisodeNo: 4,
    Title: "The Ticket",
    AirDate: "September 16, 1992",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S04E04"
    },
    {
    Season: 4,
    EpisodeNo: 5,
    Title: "The Wallet (1)",
    AirDate: "September 23, 1992",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S04E05"
    },
    {
    Season: 4,
    EpisodeNo: 6,
    Title: "The Watch (2)",
    AirDate: "September 30, 1992",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S04E06"
    },
    {
    Season: 4,
    EpisodeNo: 7,
    Title: "The Bubble Boy",
    AirDate: "October 7, 1992",
    Writers: "Larry David, Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E07"
    },
    {
    Season: 4,
    EpisodeNo: 8,
    Title: "The Cheever Letters",
    AirDate: "October 28, 1992",
    Writers: "Larry David, Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E08"
    },
    {
    Season: 4,
    EpisodeNo: 9,
    Title: "The Opera",
    AirDate: "November 4, 1992",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E09"
    },
    {
    Season: 4,
    EpisodeNo: 10,
    Title: "The Virgin",
    AirDate: "November 11, 1992",
    Writers: "Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S04E10"
    },
    {
    Season: 4,
    EpisodeNo: 11,
    Title: "The Contest",
    AirDate: "November 18, 1992",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S04E11"
    },
    {
    Season: 4,
    EpisodeNo: 12,
    Title: "The Airport",
    AirDate: "November 25, 1992",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E12"
    },
    {
    Season: 4,
    EpisodeNo: 13,
    Title: "The Pick",
    AirDate: "December 16, 1992",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E13"
    },
    {
    Season: 4,
    EpisodeNo: 14,
    Title: "The Movie",
    AirDate: "January 6, 1993",
    Writers: "Steve Skrovan, Bill Masters, Jon Hayman",
    Director: "Tom Cherones",
    SEID: "S04E14"
    },
    {
    Season: 4,
    EpisodeNo: 15,
    Title: "The Visa",
    AirDate: "January 27, 1993",
    Writers: "Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S04E15"
    },
    {
    Season: 4,
    EpisodeNo: 16,
    Title: "The Shoes",
    AirDate: "February 4, 1993",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S04E16"
    },
    {
    Season: 4,
    EpisodeNo: 17,
    Title: "The Outing",
    AirDate: "February 11, 1993",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S04E17"
    },
    {
    Season: 4,
    EpisodeNo: 18,
    Title: "The Old Man",
    AirDate: "February 18, 1993",
    Writers: "Bruce Kirschbaum",
    Director: "Tom Cherones",
    SEID: "S04E18"
    },
    {
    Season: 4,
    EpisodeNo: 19,
    Title: "The Implant",
    AirDate: "February 25, 1993",
    Writers: "Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S04E19"
    },
    {
    Season: 4,
    EpisodeNo: 20,
    Title: "The Junior Mint",
    AirDate: "March 18, 1993",
    Writers: "Andy Robin",
    Director: "Tom Cherones",
    SEID: "S04E20"
    },
    {
    Season: 4,
    EpisodeNo: 21,
    Title: "The Smelly Car",
    AirDate: "April 15, 1993",
    Writers: "Larry David, Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S04E21"
    },
    {
    Season: 4,
    EpisodeNo: 22,
    Title: "The Handicap Spot",
    AirDate: "May 13, 1993",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S04E22"
    },
    {
    Season: 4,
    EpisodeNo: 23,
    Title: "The Pilot (1)",
    AirDate: "May 20, 1993",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S04E23"
    },
    {
    Season: 4,
    EpisodeNo: 24,
    Title: "The Pilot (2)",
    AirDate: "May 20, 1993",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S04E24"
    },
    {
    Season: 5,
    EpisodeNo: 1,
    Title: "The Mango",
    AirDate: "September 16, 1993",
    Writers: "Lawrence H. Levy, Buck Dancer (Larry David pseudonym)",
    Director: "Tom Cherones",
    SEID: "S05E01"
    },
    {
    Season: 5,
    EpisodeNo: 2,
    Title: "The Puffy Shirt",
    AirDate: "September 23, 1993",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S05E02"
    },
    {
    Season: 5,
    EpisodeNo: 3,
    Title: "The Glasses",
    AirDate: "September 30, 1993",
    Writers: "Tom Gammill, Max Pross",
    Director: "Tom Cherones",
    SEID: "S05E03"
    },
    {
    Season: 5,
    EpisodeNo: 4,
    Title: "The Sniffing Accountant",
    AirDate: "October 7, 1993",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S05E04"
    },
    {
    Season: 5,
    EpisodeNo: 5,
    Title: "The Bris",
    AirDate: "October 14, 1993",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S05E05"
    },
    {    
    Season: 5,
    EpisodeNo: 6,
    Title: "The Lip Reader",
    AirDate: "October 28, 1993",
    Writers: "Carol Leifer",
    Director: "Tom Cherones",
    SEID: "S05E06"
    },
    {    
    Season: 5,
    EpisodeNo: 7,
    Title: "The Non-Fat Yogurt",
    AirDate: "November 4, 1993",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S05E07"
    },
    {    
    Season: 5,
    EpisodeNo: 8,
    Title: "The Barber",
    AirDate: "November 11, 1993",
    Writers: "Andy Robin",
    Director: "Tom Cherones",
    SEID: "S05E08"
    },
    {
    Season: 5,
    EpisodeNo: 9,
    Title: "The Masseuse",
    AirDate: "November 18, 1993",
    Writers: "Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S05E09"
    },
    {
    Season: 5,
    EpisodeNo: 10,
    Title: "The Cigar Store Indian",
    AirDate: "December 9, 1993",
    Writers: "Tom Gammill, Max Pross",
    Director: "Tom Cherones",
    SEID: "S05E10"
    },
    {
    Season: 5,
    EpisodeNo: 11,
    Title: "The Conversion",
    AirDate: "December 16, 1993",
    Writers: "Bruce Kirschbaum",
    Director: "Tom Cherones",
    SEID: "S05E11"
    },
    {
    Season: 5,
    EpisodeNo: 12,
    Title: "The Stall",
    AirDate: "January 6, 1994",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S05E12"
    },
    {
    Season: 5,
    EpisodeNo: 13,
    Title: "The Dinner Party",
    AirDate: "February 3, 1994",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S05E13"
    },
    {
    Season: 5,
    EpisodeNo: 14,
    Title: "The Marine Biologist",
    AirDate: "February 10, 1994",
    Writers: "Ron Hague, Charlie Rubin",
    Director: "Tom Cherones",
    SEID: "S05E14"
    },
    {
    Season: 5,
    EpisodeNo: 15,
    Title: "The Pie",
    AirDate: "February 17, 1994",
    Writers: "Tom Gammill, Max Pross",
    Director: "Tom Cherones",
    SEID: "S05E15"
    },
    {
    Season: 5,
    EpisodeNo: 16,
    Title: "The Stand-In",
    AirDate: "February 24, 1994",
    Writers: "Larry David",
    Director: "Tom Cherones",
    SEID: "S05E16"
    },
    {
    Season: 5,
    EpisodeNo: 17,
    Title: "The Wife",
    AirDate: "March 17, 1994",
    Writers: "Peter Mehlman",
    Director: "Tom Cherones",
    SEID: "S05E17"
    },
    {
    Season: 5,
    EpisodeNo: 18,
    Title: "The Raincoats",
    AirDate: "April 28 1994",
    Writers: "Tom Gammill, Max Pross and Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S05E18"
    },
    {
    Season: 5,
    EpisodeNo: 20,
    Title: "The Fire",
    AirDate: "May 5, 1994",
    Writers: "Larry Charles",
    Director: "Tom Cherones",
    SEID: "S05E20"
    },
    {
    Season: 5,
    EpisodeNo: 21,
    Title: "The Hamptons",
    AirDate: "May 12, 1994",
    Writers: "Peter Mehlman, Carol Leifer",
    Director: "Tom Cherones",
    SEID: "S05E21"
    },
    {
    Season: 5,
    EpisodeNo: 22,
    Title: "The Opposite",
    AirDate: "May 19, 1994",
    Writers: "Andy Cowan and Larry David, Jerry Seinfeld",
    Director: "Tom Cherones",
    SEID: "S05E22"
    },
    {
    Season: 6,
    EpisodeNo: 1,
    Title: "The Chaperone",
    AirDate: "September 22, 1994",
    Writers: "Larry David, Bill Masters, Bob Shaw",
    Director: "Andy Ackerman",
    SEID: "S06E01"
    },
    {
    Season: 6,
    EpisodeNo: 2,
    Title: "The Big Salad",
    AirDate: "September 29, 1994",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S06E02"
    },
    {
    Season: 6,
    EpisodeNo: 3,
    Title: "The Pledge Drive",
    AirDate: "October 6, 1994",
    Writers: "Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S06E03"
    },
    {
    Season: 6,
    EpisodeNo: 4,
    Title: "The Chinese Woman",
    AirDate: "October 13, 1994",
    Writers: "Peter Mehlman",
    Director: "Andy Ackerman",
    SEID: "S06E04"
    },
    {
    Season: 6,
    EpisodeNo: 5,
    Title: "The Couch",
    AirDate: "October 27, 1994",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S06E05"
    },
    {
    Season: 6,
    EpisodeNo: 6,
    Title: "The Gymnast",
    AirDate: "November 3, 1994",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S06E06"
    },
    {
    Season: 6,
    EpisodeNo: 7,
    Title: "The Soup",
    AirDate: "November 10, 1994",
    Writers: "Fred Stoller",
    Director: "Andy Ackerman",
    SEID: "S06E07"
    },
    {
    Season: 6,
    EpisodeNo: 8,
    Title: "The Mom &amp; Pop Store",
    AirDate: "November 17, 1994",
    Writers: "Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S06E08"
    },
    {
    Season: 6,
    EpisodeNo: 9,
    Title: "The Secretary",
    AirDate: "December 8, 1994",
    Writers: "Carol Leifer, Marjorie Gross",
    Director: "David Owen Trainor",
    SEID: "S06E09"
    },
    {
    Season: 6,
    EpisodeNo: 10,
    Title: "The Race",
    AirDate: "December 15, 1994",
    Writers: "Tom Gammill, Max Pross and Larry David",
    Director: "Andy Ackerman",
    SEID: "S06E10"
    },
    {
    Season: 6,
    EpisodeNo: 11,
    Title: "The Switch",
    AirDate: "January 5, 1995",
    Writers: "Bruce Kirschbaum and Sam Kass",
    Director: "Andy Ackerman",
    SEID: "S06E11"
    },
    {
    Season: 6,
    EpisodeNo: 12,
    Title: "The Label Maker",
    AirDate: "January 19, 1995",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S06E12"
    },
    {
    Season: 6,
    EpisodeNo: 13,
    Title: "The Scofflaw",
    AirDate: "January 26, 1995",
    Writers: "Peter Mehlman",
    Director: "Andy Ackerman",
    SEID: "S06E13"
    },
    {
    Season: 6,
    EpisodeNo: 16,
    Title: "The Beard",
    AirDate: "February 9, 1995",
    Writers: "Carol Leifer",
    Director: "Andy Ackerman",
    SEID: "S06E16"
    },
    {
    Season: 6,
    EpisodeNo: 17,
    Title: "The Kiss Hello",
    AirDate: "February 16, 1995",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Andy Ackerman",
    SEID: "S06E17"
    },
    {
    Season: 6,
    EpisodeNo: 18,
    Title: "The Doorman",
    AirDate: "February 23, 1995",
    Writers: "Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S06E18"
    },
    {
    Season: 6,
    EpisodeNo: 19,
    Title: "The Jimmy",
    AirDate: "March 16, 1995",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S06E19"
    },
    {
    Season: 6,
    EpisodeNo: 20,
    Title: "The Doodle",
    AirDate: "April 6, 1995",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S06E20"
    },
    {
    Season: 6,
    EpisodeNo: 21,
    Title: "The Fusilli Jerry",
    AirDate: "April 27, 1995",
    Writers: "Marjorie Gross",
    Director: "Andy Ackerman",
    SEID: "S06E21"
    },
    {
    Season: 6,
    EpisodeNo: 22,
    Title: "The Diplomat's Club",
    AirDate: "May 4, 1995",
    Writers: "Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S06E22"
    },
    {
    Season: 6,
    EpisodeNo: 23,
    Title: "The Face Painter",
    AirDate: "May 11, 1995",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S06E23"
    },
    {
    Season: 6,
    EpisodeNo: 24,
    Title: "The Understudy",
    AirDate: "May 18, 1995",
    Writers: "Marjorie Gross, Carol Leifer",
    Director: "Andy Ackerman",
    SEID: "S06E24"
    },
    {
    Season: 7,
    EpisodeNo: 1,
    Title: "The Engagement",
    AirDate: "September 21, 1995",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S07E01"
    },
    {
    Season: 7,
    EpisodeNo: 2,
    Title: "The Postponement",
    AirDate: "September 28, 1995",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S07E02"
    },
    {
    Season: 7,
    EpisodeNo: 3,
    Title: "The Maestro",
    AirDate: "October 5, 1995",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S07E03"
    },
    {
    Season: 7,
    EpisodeNo: 4,
    Title: "The Wink",
    AirDate: "October 12, 1995",
    Writers: "Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S07E04"
    },
    {
    Season: 7,
    EpisodeNo: 5,
    Title: "The Hot Tub",
    AirDate: "October 19, 1995",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S07E05"
    },
    {
    Season: 7,
    EpisodeNo: 6,
    Title: "The Soup Nazi",
    AirDate: "November 2, 1995",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S07E06"
    },
    {
    Season: 7,
    EpisodeNo: 7,
    Title: "The Secret Code",
    AirDate: "November 9, 1995",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S07E07"
    },
    {
    Season: 7,
    EpisodeNo: 8,
    Title: "The Pool Guy",
    AirDate: "November 16, 1995",
    Writers: "David Mandel",
    Director: "Andy Ackerman",
    SEID: "S07E08"
    },
    {
    Season: 7,
    EpisodeNo: 9,
    Title: "The Sponge",
    AirDate: "December 7, 1995",
    Writers: "Peter Mehlman",
    Director: "Andy Ackerman",
    SEID: "S07E09"
    },
    {
    Season: 7,
    EpisodeNo: 10,
    Title: "The Gum",
    AirDate: "December 14, 1995",
    Writers: "Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S07E10"
    },
    {
    Season: 7,
    EpisodeNo: 11,
    Title: "The Rye",
    AirDate: "January 4, 1996",
    Writers: "Carol Leifer",
    Director: "Andy Ackerman",
    SEID: "S07E11"
    },
    {
    Season: 7,
    EpisodeNo: 12,
    Title: "The Caddy",
    AirDate: "January 25, 1996",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S07E12"
    },
    {
    Season: 7,
    EpisodeNo: 13,
    Title: "The Seven",
    AirDate: "February 1, 1996",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S07E13"
    },
    {
    Season: 7,
    EpisodeNo: 14,
    Title: "The Cadillac (1)",
    AirDate: "February 8, 1996",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Andy Ackerman",
    SEID: "S07E14"
    },
    {
    Season: 7,
    EpisodeNo: 15,
    Title: "The Cadillac (2)",
    AirDate: "February 8, 1996",
    Writers: "Larry David, Jerry Seinfeld",
    Director: "Andy Ackerman",
    SEID: "S07E15"
    },
    {
    Season: 7,
    EpisodeNo: 16,
    Title: "The Shower Head",
    AirDate: "February 15, 1996",
    Writers: "Peter Mehlman, Marjorie Gross",
    Director: "Andy Ackerman",
    SEID: "S07E16"
    },
    {
    Season: 7,
    EpisodeNo: 17,
    Title: "The Doll",
    AirDate: "February 22, 1996",
    Writers: "Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S07E17"
    },
    {
    Season: 7,
    EpisodeNo: 18,
    Title: "The Friars Club (a.k.a. The Gypsies)",
    AirDate: "March 7, 1996",
    Writers: "David Mandel",
    Director: "Andy Ackerman",
    SEID: "S07E18"
    },
    {
    Season: 7,
    EpisodeNo: 19,
    Title: "The Wig Master",
    AirDate: "April 4, 1996",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S07E19"
    },
    {
    Season: 7,
    EpisodeNo: 20,
    Title: "The Calzone",
    AirDate: "April 25, 1996",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S07E20"
    },
    {
    Season: 7,
    EpisodeNo: 21,
    Title: "The Bottle Deposit (1)",
    AirDate: "May 2, 1996",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S07E21"
    },
    {
    Season: 7,
    EpisodeNo: 22,
    Title: "The Bottle Deposit (2)",
    AirDate: "May 2, 1996",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S07E22"
    },
    {
    Season: 7,
    EpisodeNo: 23,
    Title: "The Wait Out",
    AirDate: "May 9, 1996",
    Writers: "Peter Mehlman",
    Director: "Andy Ackerman",
    SEID: "S07E23"
    },
    {
    Season: 7,
    EpisodeNo: 24,
    Title: "The Invitations",
    AirDate: "May 16, 1996",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S07E24"
    },
    {
    Season: 8,
    EpisodeNo: 1,
    Title: "The Foundation",
    AirDate: "September 19, 1996",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S08E01"
    },
    {
    Season: 8,
    EpisodeNo: 2,
    Title: "The Soul Mate",
    AirDate: "September 26, 1996",
    Writers: "Peter Mehlman",
    Director: "Andy Ackerman",
    SEID: "S08E02"
    },
    {
    Season: 8,
    EpisodeNo: 3,
    Title: "The Bizarro Jerry",
    AirDate: "October 3, 1996",
    Writers: "David Mandel",
    Director: "Andy Ackerman",
    SEID: "S08E03"
    },
    {    
    Season: 8,
    EpisodeNo: 4,
    Title: "The Little Kicks",
    AirDate: "October 10, 1996",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S08E04"
    },
    {    
    Season: 8,
    EpisodeNo: 5,
    Title: "The Package",
    AirDate: "October 17, 1996",
    Writers: "Jennifer Crittenden",
    Director: "Andy Ackerman",
    SEID: "S08E05"
    },
    {    
    Season: 8,
    EpisodeNo: 6,
    Title: "The Fatigues",
    AirDate: "October 31, 1996",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S08E06"
    },
    {    
    Season: 8,
    EpisodeNo: 7,
    Title: "The Checks",
    AirDate: "November 7, 1996",
    Writers: "Steve O'Donnell and Tom Gammill, Max Pross",
    Director: "Andy Ackerman",
    SEID: "S08E07"
    },
    {    
    Season: 8,
    EpisodeNo: 8,
    Title: "The Chicken Roaster",
    AirDate: "November 14, 1996",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S08E08"
    },
    {    
    Season: 8,
    EpisodeNo: 9,
    Title: "The Abstinence",
    AirDate: "November 21, 1996",
    Writers: "Steve Koren",
    Director: "Andy Ackerman",
    SEID: "S08E09"
    },
    {    
    Season: 8,
    EpisodeNo: 10,
    Title: "The Andrea Doria",
    AirDate: "December 19, 1996",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S08E10"
    },
    {    
    Season: 8,
    EpisodeNo: 11,
    Title: "The Little Jerry",
    AirDate: "January 9, 1997",
    Writers: "Jennifer Crittenden",
    Director: "Andy Ackerman",
    SEID: "S08E11"
    },
    {   
    Season: 8,
    EpisodeNo: 12,
    Title: "The Money",
    AirDate: "January 16, 1997",
    Writers: "Peter Mehlman",
    Director: "Andy Ackerman",
    SEID: "S08E12"
    },
    {    
    Season: 8,
    EpisodeNo: 13,
    Title: "The Comeback",
    AirDate: "January 30, 1997",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "David Owen Trainor",
    SEID: "S08E13"
    },
    {    
    Season: 8,
    EpisodeNo: 14,
    Title: "The Van Buren Boys",
    AirDate: "February 6, 1997",
    Writers: "Darin Henry",
    Director: "Andy Ackerman",
    SEID: "S08E14"
    },
    {    
    Season: 8,
    EpisodeNo: 15,
    Title: "The Susie",
    AirDate: "February 13, 1997",
    Writers: "David Mandel",
    Director: "Andy Ackerman",
    SEID: "S08E15"
    },
    {
    Season: 8,
    EpisodeNo: 16,
    Title: "The Pothole",
    AirDate: "February 20, 1997",
    Writers: "Steve O'Donnell and Dan O'Keefe",
    Director: "Andy Ackerman",
    SEID: "S08E16"
    },
    {
    Season: 8,
    EpisodeNo: 17,
    Title: "The English Patient",
    AirDate: "March 13, 1997",
    Writers: "Steve Koren",
    Director: "Andy Ackerman",
    SEID: "S08E17"
    },
    {
    Season: 8,
    EpisodeNo: 18,
    Title: "The Nap",
    AirDate: "April 10, 1997",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S08E18"
    },
    {
    Season: 8,
    EpisodeNo: 19,
    Title: "The Yada Yada",
    AirDate: "April 24, 1997",
    Writers: "Peter Mehlman and Jill Franklyn",
    Director: "Andy Ackerman",
    SEID: "S08E19"
    },
    {
    Season: 8,
    EpisodeNo: 20,
    Title: "The Millennium",
    AirDate: "May 1, 1997",
    Writers: "Jennifer Crittenden",
    Director: "Andy Ackerman",
    SEID: "S08E20"
    },
    {
    Season: 8,
    EpisodeNo: 21,
    Title: "The Muffin Tops",
    AirDate: "May 8, 1997",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S08E21"
    },
    {
    Season: 8,
    EpisodeNo: 22,
    Title: "The Summer of George",
    AirDate: "May 15, 1997",
    Writers: "Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S08E22"
    },
        {
        Season: 9,
    EpisodeNo: 1,
    Title: "The Butter Shave",
    AirDate: "September 25, 1997",
    Writers: "Alec Berg, Jeff Schaffer, David Mandel",
    Director: "Andy Ackerman",
    SEID: "S09E01"
    },
        {
        Season: 9,
    EpisodeNo: 2,
    Title: "The Voice",
    AirDate: "October 2, 1997",
    Writers: "Alec Berg, Jeff Schaffer, David Mandel",
    Director: "Andy Ackerman",
    SEID: "S09E02"
    },
    {
    Season: 9,
    EpisodeNo: 3,
    Title: "The Serenity Now",
    AirDate: "October 9, 1997",
    Writers: "Steve Koren",
    Director: "Andy Ackerman",
    SEID: "S09E03"
    },
    {
    Season: 9,
    EpisodeNo: 4,
    Title: "The Blood",
    AirDate: "October 16, 1997",
    Writers: "Dan O'Keefe",
    Director: "Andy Ackerman",
    SEID: "S09E04"
    },
    {
    Season: 9,
    EpisodeNo: 5,
    Title: "The Junk Mail",
    AirDate: "October 30, 1997",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S09E05"
    },
    {
    Season: 9,
    EpisodeNo: 6,
    Title: "The Merv Griffin Show",
    AirDate: "November 6, 1997",
    Writers: "Bruce Eric Kaplan",
    Director: "Andy Ackerman",
    SEID: "S09E06"
    },
    {
    Season: 9,
    EpisodeNo: 7,
    Title: "The Slicer",
    AirDate: "November 13, 1997",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S09E07"
    },
    {
    Season: 9,
    EpisodeNo: 8,
    Title: "The Betrayal",
    AirDate: "November 20, 1997",
    Writers: "David Mandel, Peter Mehlman",
    Director: "Andy Ackerman",
    SEID: "S09E08"
    },
    {
    Season: 9,
    EpisodeNo: 9,
    Title: "The Apology",
    AirDate: "December 11, 1997",
    Writers: "Jennifer Crittenden",
    Director: "Andy Ackerman",
    SEID: "S09E09"
    },
    {
    Season: 9,
    EpisodeNo: 10,
    Title: "The Strike",
    AirDate: "December 18, 1997",
    Writers: "Dan O'Keefe, Alec Berg, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S09E10"
    },
    {
    Season: 9,
    EpisodeNo: 11,
    Title: "The Dealership",
    AirDate: "January 8, 1998",
    Writers: "Steve Koren",
    Director: "Andy Ackerman",
    SEID: "S09E11"
    },
    {
    Season: 9,
    EpisodeNo: 12,
    Title: "The Reverse Peephole (a.k.a. The Man Fur)",
    AirDate: "January 15, 1998",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S09E12"
    },
    {
    Season: 9,
    EpisodeNo: 13,
    Title: "The Cartoon",
    AirDate: "January 29, 1998",
    Writers: "Bruce Eric Kaplan",
    Director: "Andy Ackerman",
    SEID: "S09E13"
    },
    {
    Season: 9,
    EpisodeNo: 14,
    Title: "The Strongbox",
    AirDate: "February 5, 1998",
    Writers: "Dan O'Keefe",
    Director: "Andy Ackerman",
    SEID: "S09E14"
    },
    {
    Season: 9,
    EpisodeNo: 15,
    Title: "The Wizard",
    AirDate: "February 26, 1998",
    Writers: "Steve Lookner",
    Director: "Andy Ackerman",
    SEID: "S09E15"
    },
    {
    Season: 9,
    EpisodeNo: 16,
    Title: "The Burning",
    AirDate: "March 19, 1998",
    Writers: "Jennifer Crittenden",
    Director: "Andy Ackerman",
    SEID: "S09E16"
    },
    {
    Season: 9,
    EpisodeNo: 17,
    Title: "The Bookstore",
    AirDate: "April 9, 1998",
    Writers: "Spike Feresten",
    Director: "Andy Ackerman",
    SEID: "S09E17"
    },
    {
    Season: 9,
    EpisodeNo: 18,
    Title: "The Frogger",
    AirDate: "April 23, 1998",
    Writers: "Gregg Kavet, Andy Robin",
    Director: "Andy Ackerman",
    SEID: "S09E18"
    },
    {
    Season: 9,
    EpisodeNo: 19,
    Title: "The Maid",
    AirDate: "April 30, 1998",
    Writers: "Alec Berg, David Mandel, Jeff Schaffer",
    Director: "Andy Ackerman",
    SEID: "S09E19"
    },
    {
    Season: 9,
    EpisodeNo: 20,
    Title: "The Puerto Rican Day",
    AirDate: "May 7, 1998",
    Writers: "Alec Berg, Jennifer Crittenden, Spike Feresten, Bruce Eric Kaplan, Gregg Kavet, Steve Koren, David Mandel, Dan O'Keefe, Andy Robin and Jeff Schaffer.",
    Director: "Andy Ackerman",
    SEID: "S09E20"
    },
    {
    Season: 9,
    EpisodeNo: 23,
    Title: "The Finale",
    AirDate: "May 14, 1998",
    Writers: "Larry David",
    Director: "Andy Ackerman",
    SEID: "S09E23"
    }
]

module.exports = episodeData
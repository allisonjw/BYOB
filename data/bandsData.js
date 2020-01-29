const bandsData = [
    {
    band_id: 1,
    band: "NSYNC",
    highest_pos: 1,
    highest_pos_date: "2000-07-29",
    highest_song: "It's Gonna Be Me",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=GQMlWwIXg3M"
    },
    {
    band_id: 2,
    band: 112,
    highest_pos: 4,
    highest_pos_date: "2001-07-07",
    highest_song: "Peaches And Cream",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=wl2NCXzg1FQ"
    },
    {
    band_id: 3,
    band: "Big Time Rush",
    highest_pos: 72,
    highest_pos_date: "2011-05-07",
    highest_song: "Boyfriend (ft. Snoop Dogg)",
    danceSpeed: "pop",
    featuring_artist: "yes",
    highest_song_vid: "https://www.youtube.com/watch?v=jUOdO5dqPeU"
    },
    {
    band_id: 4,
    band: "5 Seconds of Summer",
    highest_pos: 16,
    highest_pos_date: "2014-07-19",
    highest_song: "Amnesia",
    danceSpeed: "slow",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=DCCJCILiX3o"
    },
    {
    band_id: 5,
    band: "98 Degrees",
    highest_pos: 2,
    highest_pos_date: "2000-09-30",
    highest_song: "Give me Just One Night",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=PYb2IdrN-ns"
    },
    {
    band_id: 6,
    band: "All-4-One",
    highest_pos: 1,
    highest_pos_date: "1994-05-21",
    highest_song: "I Swear",
    danceSpeed: "slow",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=25rL-ooWICU"
    },
    {
    band_id: 7,
    band: "B2K",
    highest_pos: 1,
    highest_pos_date: "2003-02-01",
    highest_song: "Bump, Bump, Bump (ft. P. Diddy)",
    danceSpeed: "pop",
    featuring_artist: "yes",
    highest_song_vid: "https://www.youtube.com/watch?v=CgiX53hjAPc"
    },
    {
    band_id: 8,    
    band: "Backstreet Boys",
    highest_pos: 2,
    highest_pos_date: "1997-09-06",
    highest_song: "Quit Playing Games with my Heart",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=Ug88HO2mg44"
    },
    {
    band_id: 9,
    band: "Bell Biv DeVoe",
    highest_pos: 3,
    highest_pos_date: "1990-06-09",
    highest_song: "Poison",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?time_continue=27&v=sb2np1HGqxg"
    },
    {
    band_id: 10,
    band: "Blackstreet",
    highest_pos: 1,
    highest_pos_date: "1996-11-09",
    highest_song: "No Diggity (ft. Dr. Dre)",
    danceSpeed: "pop",
    featuring_artist: "yes",
    highest_song_vid: "https://www.youtube.com/watch?v=3KL9mRus19o"
    },
    {
    band_id: 11,
    band: "Boyz II Men",
    highest_pos: 1,
    highest_pos_date: "1992-08-15",
    highest_song: "End of the Road",
    danceSpeed: "slow",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=zDKO6XYXioc"
    },
    {
    band_id: 12,
    band: "BTS",
    highest_pos: 67,
    highest_pos_date: "2017-10-14",
    highest_song: "DNA",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=MBdVXkSdhwU"
    },
    {
    band_id: 13,
    band: "Color Me Badd",
    highest_pos: 1,
    highest_pos_date: "1991-09-21",
    highest_song: "I Adore Mi Amor",
    danceSpeed: "slow",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=92NdfSeOLA0"
    },
    {
    band_id: 14,
    band: "Hanson",
    highest_pos: 1,
    highest_pos_date: "1997-05-24",
    highest_song: "MMMBop",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=NHozn0YXAeE"
    },
    {
    band_id: 15,
    band: "IMx",
    highest_pos: 23,
    highest_pos_date: "2000-01-08",
    highest_song: "Stay The Night",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=t3s-Vp-Qv5Q"
    },
    {
    band_id: 16,
    band: "Jagged Edge",
    highest_pos: 3,
    highest_pos_date: "2001-09-15",
    highest_song: "Where The Party At",
    danceSpeed: "pop",
    featuring_artist: "yes",
    highest_song_vid: "https://www.youtube.com/watch?v=9UCY_U4QwqI"
    },
    {
    band_id: 17,
    band: "Jodeci",
    highest_pos: 4,
    highest_pos_date: "1993-08-28",
    highest_song: "Lately",
    danceSpeed: "slow",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=V2ddj5uKbpY"
    },
    {
    band_id: 18,
    band: "Jonas Brothers",
    highest_pos: 5,
    highest_pos_date: "2008-07-12",
    highest_song: "Burnin' Up",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=5KNEZJ6KkLI"
    },
    {
    band_id: 19,
    band: "Menudo",
    highest_pos: 62,
    highest_pos_date: "1985-06-15",
    highest_song: "Hold Me",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=PHRjWauwpvE"
    },
    {
    band_id: 20,
    band: "New Edition",
    highest_pos: 3,
    highest_pos_date: "1996-08-31",
    highest_song: "Hit Me Off",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=fE77mos-ppo"
    },
    {
    band_id: 21,
    band: "New Kids On The Block",
    highest_pos: 1,
    highest_pos_date: "1989-06-17",
    highest_song: "I'll Be Loving You (Forever)",
    danceSpeed: "slow",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=ZT_7UjCVELg"
    },
    {
    band_id: 22,
    band: "One Direction",
    highest_pos: 2,
    highest_pos_date: "2013-08-10",
    highest_song: "Best Song Ever",
    danceSpeed: "pop",
    featuring_artist: "no",
    highest_song_vid: "https://www.youtube.com/watch?v=o_v9MY_FMcw"
    }
]

module.exports = bandsData;
# FileShare
Simpe program I made to share files in a class I am teaching. Students don't know how to use Google Drive so I just put
this on the board and tell them what to type. Simple and straightforward (hopefully).

# How to
Files are served out of the `/public` directory which already has an `example.txt`, just enter `example.txt` into the
filename box on the website and it will download. Long as the correct name is entered and the file is in the `/public`
directory it will be downloaded.

# Running
I just use Docker, I would recommend mounting the public folder somewhere so you can easily add files to it and
whatnot. Container does need to be restarted whenever you add a file unfortunately, just NextJS things.
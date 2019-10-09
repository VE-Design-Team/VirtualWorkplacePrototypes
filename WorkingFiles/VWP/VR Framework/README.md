<h1 align="center"><img width="500" align="center" src="https://livetourlab.com/static/img/ltlab-logo-2000x303.a41dfa1.png" alt="LiveTourLab"/></h1>
<br/>

LiveTourLab is a framework for creating Live VR Tours. 21 ready components [React VR](https://github.com/facebook/react-vr) code.

## Demo (click play to enter)
<a href="https://livetourlab.com/tours/3004
" target="_blank"><img src="https://user-images.githubusercontent.com/13546743/29484526-cbd21df0-84ea-11e7-87e8-55dc6844f29c.gif"
alt="LiveTourLab Demo" width="300" border="0" /></a><br/>

<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 10x more interactive than 360 videos<br/>
<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 10x faster creation than game engine VR<br/>
<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 10x more extensible than GUI authoring tools<br/>
<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 100% cross-platform including custom code <br/>
<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 100% standard camera compatible<br/>
<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 100% open source<br/>
<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 0 server lock-in with static build<br/>
<img src="https://user-images.githubusercontent.com/13546743/29484640-247e4350-84ed-11e7-9fdb-1c9d4cadb57c.png"
alt="LiveTourLab Demo" width="16" height="16" border="0" /> 0 effort to start, a lifetime to master<br/>


In progress:
- [ ] World rotation instead of scene rotation to avoid the rotation flicker or use fade-to-black
- [ ] Virtual workplace project - creating new interactions on the VR
- [ ] Embedding H5P on the new VR for the VWP project.




## Compiling from Source

Welcome to contribute to the LiveTourLab core by working the source code. Given the React VR project structure, I tried many different variants for folder structure, symlinks and hard links. Finally I ended up using a much simpler solution, which is what I recommend: Just move the live-tour-lab directory out of node_modules and into your project directory.

Stand in the project folder, MyLiveTour in the getting started example above, and do:
```
# edit ./package.json and remove live-tour-lab from dependencies
rm -rf node_modules/live-tour-lab
git clone  https://github.com/livetourlab/live-tour-lab.git
npm start
```

That is it. Your project still runs. No need to symlink or manage dependencies. Now go ahead and edit the source. When you have produced something great, just push to github from inside the live-tour-lab directory  (not project directory).


## License

Apache License Version 2.0


## Component Reference Documentation

Please find the component reference documentation on:
#### [livetourlab.com/docs](https://livetourlab.com/docs)



Thank you!

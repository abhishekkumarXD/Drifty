export default function Demo(){
    return(
        <div id="demo" className="bg-bottom">
        <h1 className="text-center font-extrabold text-4xl pt-6">Demonstration of Drifty</h1>
        <p className="text-center text-black text-2xl py-3">Here is a quick demo of Drifty</p>
        <div className="flex justify-center">
        	<video width="80%" muted autoPlay loop>
        		<source src="https://cdn.jsdelivr.net/gh/SaptarshiSarkar12/Drifty@master/Website/public/Usage.webm" type='video/webm'/>
        			Your browser does not support the video tag
        	</video>
        </div>
        </div>
    )
}

notes_blues = [ // all the notes in the blues scale
    'C0','Eb0','F0','Gb0','G0','Bb0',
    'C1','Eb1','F1','Gb1','G1','Bb1',
    'C2','Eb2','F2','Gb2','G2','Bb2',
    'C3','Eb3','F3','Gb3','G3','Bb3',
    'C4','Eb4','F4','Gb4','G4','Bb4',
    'C5','Eb5','F5','Gb5','G5','Bb5',
    'C6','Eb6','F6','Gb6','G6','Bb6',
    'C7','Eb7','F7','Gb7','G7','Bb7',
    'C8','Eb8','F8','Gb8','G8','Bb8',
    'C9','Eb9','F9','Gb9','G9','Bb9',
    'C10','Eb10','F10','Gb10','G10','Bb10'
];

note = 25; // first note to play

previous_light_level = 0;

timbre_synth = T("cosc", {wave: 'sin', beats:7, mul:0.5}); // initialize synth

window.plugin.lightsensor.watchReadings( // get light readings
	function(reading){
        var current_light_level = reading.intensity;
        
        if (Math.abs(current_light_level - previous_light_level) > 25){
        	         
            if (current_light_level < previous_light_level){ // semitone down
                note--;
            }
            else if (current_light_level > previous_light_level){ // semitone up
            	note++;
            }
	        
	        timbre_synth.set({freq: teoria.note(notes_blues[note]).fq()}); // synth frequency = current note frequency
	        
	        previous_light_level = current_light_level;
        }
    }  
);

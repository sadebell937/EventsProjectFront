import {FormEvent, useEffect, useState} from 'react';
import './UserPreferenceForm.css';
import {UserPreference} from "../models/eventModels";


interface Props {
    onSubmit:(UserPreference:UserPreference) => void;
}    
    

function UserPreferenceForm({onSubmit}: Props) {
   // const [eventsCheckedBoxes, seteventsCheckedBoxes] = useState(new Array(6).fill(false));
    const [eventType, seteventType] =useState<string[]>([]);
    const [postalCode, setpostalCode]= useState('');
    const [genre, setgenre] = useState<string[]>([]);
    const [sport, setsport] = useState<string[]>([]);
    const [sportsCheckBox, setsportsCheckedBox] = useState(false);
    const [hardRockCheckBox, sethardRockCheckBox] = useState(false);
    const [concertsCheckBox, setconcertsCheckBox] = useState(false);
    const [broadwayCheckBox, setbroadwayCheckBox] = useState(false);
    const [horseRacingCheckBox, sethorseRacingCheckBox] = useState(false);
    const [monsterTrucksCheckBox, setmonsterTrucksCheckBox] = useState(false);
    const [comedyCheckBox, setcomedyCheckBox] = useState(false);
    const [reggaeCheckBox, setraggaeCheckBox] = useState(false);
    const [hipHopCheckBox, sethipHopCheckBox] = useState(false);
    const [technoCheckBox, settechnoCheckBox] = useState(false);
    const [popCheckBox, setpopCheckBox] = useState(false);
    const [electronicCheckBox, setelectronicCheckBox] = useState(false);
    const [folkCheckBox, setfolkCheckBox] = useState(false);
    const [punkCheckBox, setpunkCheckBox] = useState(false);
    const [soulCheckBox, setsoulCheckBox] = useState(false);
    const [latinCheckBox, setlatinCheckBox] = useState(false);
    const [classicalCheckBox, setclassicalCheckBox] = useState(false);
    const [jazzCheckBox, setjazzCheckBox] = useState(false);
    const [bluesCheckBox, setbluesCheckBox] = useState(false);
    const [rapCheckBox, setrapCheckBox] = useState(false);
    const [indieCheckBox, setindieCheckBox] = useState(false);
    const [countryCheckBox, setcountryCheckBox] = useState(false);
    const [classicRockCheckBox, setclassicRockCheckBox] = useState(false);
    const [alternativeCheckBox, setalternativeCheckBox] = useState(false);
    const [baseballCheckBox, setbaseballCheckBox] = useState(false);
    const [footballCheckBox, setfootballCheckBox] = useState(false);
    const [basketballCheckBox, setbasketballCheckBox] = useState(false);
    const [fightingCheckBox, setfightingCheckBox] = useState(false);
    const [golfCheckBox, setgolfCheckBox] = useState(false); 
    const [hockeyCheckBox, sethockeyCheckBox] = useState(false);
    const [soccerCheckBox, setsoccerCheckBox] = useState(false);








    //const events =["Sports", "Concerts", "Comedy", "Broadway", "Horseracing", "Monster_Trucks"]
   


    const handleGenreChange = (e: any) => {
       const genreValue = e.target.value;
       const genreChecked = e.target.checked;
       console.log(`${genreValue} is ${genreChecked}`);

       if(genreChecked) {
           setgenre(prev =>[...prev,genreValue])
       }else{
           setgenre(genre.filter(g => g!== genreValue))
       }

       if(genreValue === "Hard_Rock") {
        sethardRockCheckBox(e.target.checked)
       }

       if(genreValue === "Reggae") {
       setraggaeCheckBox(e.target.checked)
       }

       if(genreValue === "Techno") {
        settechnoCheckBox(e.target.checked)
       }
        
        if(genreValue === "Hip_Hop") {
        sethipHopCheckBox(e.target.checked)
        }

        if(genreValue === "Pop") {
        setpopCheckBox(e.target.checked)
        }

        if(genreValue === "Electronic") {
            setelectronicCheckBox(e.target.checked)
        }

        if(genreValue === "Folk") {
            setfolkCheckBox(e.target.checked)
        }

        if(genreValue === "Punk") {
            setpunkCheckBox(e.target.checked)
        }

        if(genreValue === "Soul") {
            setsoulCheckBox(e.target.checked)
        }
        if(genreValue === "Latin") {
            setlatinCheckBox(e.target.checked)
        }
        if(genreValue === "Classical") {
            setclassicalCheckBox(e.target.checked)
        }
        if(genreValue === "Jazz") {
            setjazzCheckBox(e.target.checked)
        }
        if(genreValue === "Blues") {
            setbluesCheckBox(e.target.checked)
        }
        if(genreValue === "Rap") {
            setrapCheckBox(e.target.checked)
        }
        if(genreValue === "Indie") {
            setindieCheckBox(e.target.checked)
        }
        if(genreValue === "Country") {
            setcountryCheckBox(e.target.checked)
        }
        if(genreValue === "Classic_Rock") {
            setclassicRockCheckBox(e.target.checked)
        }
        if(genreValue === "Alternative") {
            setalternativeCheckBox(e.target.checked)
        }

    }

       
    

    
    const handleEventChange = (e: any) => {
        //setsportsCheckedBox(e.target.checked)
        const eventValue = e.target.value;
        const eventChecked = e.target.checked;
        console.log(`${eventValue} is ${eventChecked}`);
 
        if (eventChecked) {
            seteventType(prev => [...prev, eventValue])
        }else{
            seteventType(eventType.filter(et => et!== eventValue))
        }

        if(eventValue === "Sports") {
            setsportsCheckedBox(e.target.checked)
        }

        if(eventValue === "Concert") {
            setconcertsCheckBox(e.target.checked)
        }

        if(eventValue === "Comedy") {
            setcomedyCheckBox(e.target.checked)
        }

        if(eventValue === "Broadway") {
            setbroadwayCheckBox(e.target.checked)
        }

        if(eventValue === "HorseRacing") {
            sethorseRacingCheckBox(e.target.checked)
        }
        if(eventValue === "Monster_Trucks") {
            setmonsterTrucksCheckBox(e.target.checked)
        }    
        

     }



     const handleSportChange = (e: any) => {
        const sportValue = e.target.value;
        const sportChecked = e.target.checked;
        console.log(`${sportValue} is ${sportChecked}`);
        
        if(sportChecked) {
            setsport(prev => [...prev,sportValue])
        }else{
            setsport(sport.filter(s => s!== sportValue))
        }
        if(sportValue === "Baseball") {
            setbaseballCheckBox(e.target.checked)
        }  
        if(sportValue === "Football") {
            setfootballCheckBox(e.target.checked)
        }  
        if(sportValue === "Basketball") {
            setbasketballCheckBox(e.target.checked)
        }  
        if(sportValue === "Fighting") {
            setfightingCheckBox(e.target.checked)
        }  
        if(sportValue === "Golf") {
            setgolfCheckBox(e.target.checked)
        }  
        if(sportValue === "Hockey") {
            sethockeyCheckBox(e.target.checked)
        }  
        if(sportValue === "Soccer") {
            setsoccerCheckBox(e.target.checked)
        }  


     }

        

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        const UserPref: UserPreference = {
            postal_code: postalCode,
            genre:genre, 
            sport:sport,
            event: eventType

        }


        onSubmit(UserPref);
        seteventType([]);
        setpostalCode('');
        setgenre([]);
        setsportsCheckedBox(false);
        sethardRockCheckBox(false);
        setconcertsCheckBox(false);
        setcomedyCheckBox(false);
        sethardRockCheckBox(false);
        setraggaeCheckBox(false);
        sethipHopCheckBox(false);
        setmonsterTrucksCheckBox(false);
        setpopCheckBox(false);
        setelectronicCheckBox(false);
        setfolkCheckBox(false);
        setpunkCheckBox(false);
        setsoulCheckBox(false);
        setlatinCheckBox(false);
        setclassicalCheckBox(false);
        setjazzCheckBox(false);
        setbluesCheckBox(false);
        setrapCheckBox(false);
        setindieCheckBox(false);
        setcountryCheckBox(false)
        setclassicRockCheckBox(false);
        setalternativeCheckBox(false);
        setbaseballCheckBox(false);
        setfootballCheckBox(false);
        setbasketballCheckBox(false);
        setfightingCheckBox(false);
        setgolfCheckBox(false);
        sethockeyCheckBox(false);
        setsoccerCheckBox(false);

    }

    return(
        <div className="UserPreferenceForm">
            <form onSubmit={handleSubmit}>   
              
              <h2>PLEASE TAKE OUR QUIZ TO FIND YOUR EVENT STYLE</h2>

                <p>
                    <label className="UserPref_QuestionTitle" htmlFor='postalcode'>What is your desired location? </label>
                    <input type ="number"  placeholder = "zipcode" value = {postalCode} onChange =  {e => setpostalCode(e.target.value)} required></input>
                </p>

               

                <p>
                    <label className="UserPref_QuestionTitle" htmlFor='type'>Which Type of Events Are You Looking For? Please select all that apply</label>
                    <div className="UserPref_EventTypeInput">
                        <input type= "checkbox"  value= "Sports" onChange={handleEventChange} checked={sportsCheckBox}  />Sports
                        <input type= "checkbox" value= "Concert" onChange={handleEventChange}checked={concertsCheckBox}  />Concerts
                        <input type= "checkbox" value= "Comedy" onChange={handleEventChange} checked={comedyCheckBox} />Comedy
                        <input type= "checkbox" value= "Broadway" onChange={handleEventChange} checked={broadwayCheckBox} />Broadway
                        <input type= "checkbox" value= "HorseRacing" onChange={handleEventChange} checked={horseRacingCheckBox} />HorseRacing
                        <input type= "checkbox" value= "Monster_Trucks" onChange={handleEventChange} checked={monsterTrucksCheckBox}/>Monster Trucks
                    </div>
                </p>

                {eventType.includes("Concert") &&
                <p className='genre'>  
                    <label className="UserPref_QuestionTitle" htmlFor='genre'>What Genre Of Music Do You Like? Please select all that apply</label>
                    <div className="UserPref_GenreInput_Container">
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Hard_Rock" onChange={handleGenreChange}checked={hardRockCheckBox}  />Hard Rock
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Reggae" onChange={handleGenreChange} checked ={reggaeCheckBox}/>Reggae 
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Hip_Hop" onChange={handleGenreChange} checked={hipHopCheckBox} />Hip Hop
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Techno" onChange={handleGenreChange}checked={technoCheckBox}  />Techno
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Pop" onChange={handleGenreChange} checked={popCheckBox} />Pop
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Electronic" onChange={handleGenreChange}checked={electronicCheckBox}  />Electronic
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Folk" onChange={handleGenreChange} checked={folkCheckBox} />Folk
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Punk" onChange={handleGenreChange}checked={punkCheckBox}  />Punk
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Soul" onChange={handleGenreChange} checked={soulCheckBox} />Soul
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Latin" onChange={handleGenreChange} checked={latinCheckBox} />Latin
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Classical" onChange={handleGenreChange}checked={classicalCheckBox}  />Classical
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Jazz" onChange={handleGenreChange} checked={jazzCheckBox} />Jazz
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Blues" onChange={handleGenreChange}checked={bluesCheckBox}  />Blues
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Rap" onChange={handleGenreChange} checked={rapCheckBox} />Rap
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Indie" onChange={handleGenreChange}checked={indieCheckBox}  />Indie
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Country" onChange={handleGenreChange} checked={countryCheckBox}  />Country
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Classic_Rock" onChange={handleGenreChange} checked={classicRockCheckBox} />Classic Rock
                        <input className="UserPref_GenreInput" type= "checkbox" value= "Alternative" onChange={handleGenreChange} checked={alternativeCheckBox} />Alternative
                    </div>
                </p>
                }

                {eventType.includes("Sports") &&
                <p>
                    <label className="UserPref_QuestionTitle" htmlFor='eventType'>What Type Of Sports Do You Enjoy?</label> 
                    <div className="UserPref_SportInput">
                        <input type= "checkbox" value= "Baseball" onChange={handleSportChange} checked={baseballCheckBox}  />Baseball
                        <input type= "checkbox" value= "Football" onChange={handleSportChange} checked={footballCheckBox} />Football
                        <input type= "checkbox" value= "Basketball" onChange={handleSportChange} checked={basketballCheckBox}  />Basketball
                        <input type= "checkbox" value= "Fighting" onChange={handleSportChange} checked={fightingCheckBox}  />Fighting/WWE
                        <input type= "checkbox" value= "Golf" onChange={handleSportChange} checked={golfCheckBox}  />Golf
                        <input type= "checkbox" value= "Hockey" onChange={handleSportChange} checked={hockeyCheckBox} />Hockey
                        <input type= "checkbox" value= "Soccer" onChange={handleSportChange} checked={soccerCheckBox} />Soccer
                    </div>
                </p>
                }

                <input className='submit' type="submit"value ="Submit"/>

            </form>

            
        </div>
    )
}

export default UserPreferenceForm;
$(function ()
{
    /**
     * VARIABLES FOR THE FUNCTIONALITY
     */
    let nationArrayIndex = 0;
    let nationPhotoArray = ["blank", "AIN", "ACADIA", "ALPINE", "AQUILONA" , "BALISCA", "CALARE", "CALIFORNIA", "ESQUIMALT", "GERMANY", "IBERIA", "ILLIUM", "JARRABAN", "KARASEM", "KOREAN", "MALERNO", "MARRASCANIA", "MASYAN", "MEXICO", "NAKAMA", "NEWDUV", "NWF", "OKA","PHILIPPINES","RIO", "SANSHENG","SICULIA","SONORA","SU","TAK","TEI","US","WP", "ZAM"];
    let nationArray = ["", "AIN", "Acadia", "Alpine Federation", "Aquilona" , "Balisca", "Calare", "California", "Esquimalt", "Germany", "Iberia", "Illium", "Jarraban", "Karasem", "Korean Empire", "Malerno","Marrascania", "Masyan", "Mexico", "Nakama", "New Duveland", "New Westfalen", "Oka","Philippines", "Río de La Plata","Sansheng","Siculia","Sonora","Soviet Union","Takamaiku","Teiko","United States","West Pacific","Zambezi"];
    let currentNationChoice = "";
    let currentMood = "BLANK";

    const previous = $(".prevbtn");
    const next = $(".nextbtn");
    const photo = $(".combores");
    const nation = $(".countryname");
    const randomizer = $(".randomize");
    const moodcmb = $(".custom-select");

    /**
     * REMOVES THE SPLASHINTRO FROM EXISTENCE
     */
    setTimeout(function () {
        $("#loader").slideUp(500, function () {
            $(this).remove();
        });
    },2000)


    /**
     * THIS BASICALLY GO BACK TO PREVIOUS COUNTRIES
     */

    previous.on("click", function ()
    {
        $('.custom-select option:eq(0)').prop('selected', true);
        refreshPhoto();
        if (nationArrayIndex > 1 && nationArrayIndex <= nationPhotoArray.length -1)
        {
            nationArrayIndex--;

            photo.attr('src', 'src/img/combo/'+ nationPhotoArray[nationArrayIndex] +"_"+ currentMood +'.png');
            nation.text(nationArray[nationArrayIndex]);
        }

        else
        {
            if (nationArrayIndex === 1)
            {
                nationArrayIndex--;
                photo.attr('src', 'src/img/combo/blank_BLANK.png');
                nation.text("");
            }

            else
            {
                if (nationArrayIndex === 0)
                {
                    nationArrayIndex = nationPhotoArray.length - 1;
                    photo.attr('src', 'src/img/combo/'+ nationPhotoArray[nationArrayIndex] +"_"+ currentMood +'.png');
                    nation.text(nationArray[nationArrayIndex]);
                }
            }
        }
    })

    /**
     * THIS BASICALLY GO NEXT TO MORE COUNTRIES
     */
    next.on("click", function ()
    {
        $('.custom-select option:eq(0)').prop('selected', true);
        refreshPhoto();
        if (nationArrayIndex >= 0 && nationArrayIndex < nationArray.length -1)
        {
            nationArrayIndex++;
            photo.attr('src', 'src/img/combo/'+ nationPhotoArray[nationArrayIndex] +"_"+ currentMood +'.png');
            nation.text(nationArray[nationArrayIndex]);
        }

        else
        {
            if (nationArrayIndex === nationArray.length - 1)
            {
                nationArrayIndex = 0;
                photo.attr('src', 'src/img/combo/'+ nationPhotoArray[nationArrayIndex] +"_"+ currentMood +'.png');
                nation.text(nationArray[nationArrayIndex]);
            }

            if (nationArrayIndex === 0)
            {
                photo.attr('src', 'src/img/combo/blank_BLANK.png');
                nation.text(nationArray[nationArray]);
            }
        }
    });

    /**
     * Listens if the combobox for the mood box has been changed and designate that value
     */
    moodcmb.on('change', function ()
    {
        let value = parseInt($("select[name='custom-select'] option:selected").val());
        switch (value)
        {
            case 0: currentMood = "BLANK";
                    break;
            case 1: currentMood = "NORMAL";
                    break;
            case 2: currentMood = "HAPPY";
                    break;
            case 3: currentMood = "ANGRY";
                    break;
            case 4: currentMood = "SCARED";
                   break;
        }

            photo.attr('src', 'src/img/combo/'+ nationPhotoArray[nationArrayIndex] +"_"+ currentMood +'.png');
    });

    /**
     * UPON CLICKING THE RANDOM BUTTON, IT RANDOMIZES A COMBO OF NATION AND MOOD AS WELL!.
     */
    randomizer.on("click", function ()
    {
        let randNation = Math.floor(Math.random() * ((nationPhotoArray.length - 1) - 0 ) + 1);
        let randMood = Math.floor(Math.random() * (5 - 1) + 1);

        nationArrayIndex = randNation;

        $('.custom-select option:eq('+randMood+')').prop('selected', true);
        switch (randMood)
        {
            case 0: currentMood = "BLANK";
                break;
            case 1: currentMood = "NORMAL";
                break;
            case 2: currentMood = "HAPPY";
                break;
            case 3: currentMood = "ANGRY";
                break;
            case 4: currentMood = "SCARED";
                break;
        }

        nation.text(nationArray[nationArrayIndex]);
        photo.attr('src', 'src/img/combo/'+ nationPhotoArray[nationArrayIndex] +"_"+ currentMood +'.png');
    })

    /**
     * Refreshes the photo when selecting a new country
     */
    function refreshPhoto()
    {
        currentMood = "BLANK";
        photo.attr('src', 'src/img/combo/'+ nationPhotoArray[nationArrayIndex] +"_"+ currentMood +'.png');
    }

})
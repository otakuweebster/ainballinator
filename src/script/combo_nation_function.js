$(function ()
{
    /**
     * VARIABLES FOR THE FUNCTIONALITY
     */
    let nationArrayIndex = 0;
    let nationPhotoArray = ["blank", "AIN", "ACADIA", "ALPINE", "AQUILONA" , "BALISCA", "CALARE", "CALIFORNIA", "ESQUIMALT", "GERMANY", "IBERIA", "ILLIUM", "JARRABAN", "KARASEM", "KOREAN", "MALERNO", "MARRASCANIA", "MASYAN", "MEXICO", "NAKAMA", "NEWDUV", "NWF", "OKA","PHILIPPINES","RIO"];
    let nationArray = ["", "AIN", "Acadia", "Alpine Federation", "Aquilona" , "Balisca", "Calare", "California", "Esquimalt", "Germany", "Iberia", "Illium", "Jarraban", "Karasem", "Korean Empire", "Malerno","Marrascania", "Masyan", "Mexico", "Nakama", "New Duveland", "New Westfalen", "Oka","Philippines", "Río de La Plata"];
    let currentNationChoice = "";
    let currentMood = "BLANK";

    const previous = $(".prevbtn");
    const next = $(".nextbtn");
    const photo = $(".combores");
    const nation = $(".countryname");
    const moodcmb = $(".custom-select");

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
import React from "react";
import Card from './Card';
const Container = (props) => {

    return (
        <div className={'Container'}>
            <table>
                <tbody>
                    <tr>
                        <td><Card name='Daisy' age='Young' breed='Domestic Shorthair' gender='female' image='https://dbw3zep4prcju.cloudfront.net/animal/94d5bc42-01c2-4d39-8eb4-d9dccd515e35/image/5b11038f-6063-4516-bb14-e0c2f49baebd.jpg?versionId=o3eJJITKC8bgZLr9h1PNQfFiGE4v5FD9&bust=1712658510&width=1080' website='https://www.petfinder.com/cat/daisy-62583907/va/fairfax/humane-society-of-fairfax-county-inc-va163/' /></td>
                        <td><Card name='Mimo' age='Young' breed='Domestic Shorthair' gender='male' image='https://dbw3zep4prcju.cloudfront.net/animal/5c19b3d9-3b9a-4d05-ae12-569d43f2238b/image/24a1b165-7f88-48f0-ba91-6339cf879c0a.jpeg?versionId=v9pc7DK0lBhavqYFUKJ93DPAO1Tg3f6H&bust=1727023003&width=1080' website='https://www.petfinder.com/cat/mimo-73245895/va/fairfax/pets-bring-joy-va647/' /></td>
                        <td><Card name='Bean and Mocha' age='Young' breed='Domestic Shorthairs' gender='male' image='https://dbw3zep4prcju.cloudfront.net/animal/13a993d4-52a7-4312-a4fb-d7b531401096/image/41d1b9de-a6e9-4953-8a14-f40f261cc65f.jpeg?versionId=0jidkVeQtb8veN3klCwZ7yZ2EIXUpitx&bust=1726506341&width=1080' website='https://www.petfinder.com/cat/bean-and-mocha-73175579/va/fairfax/pets-bring-joy-va647/' /></td>
                        <td><Card name='Grey Goose' age='Adult' breed='British Shorthair' gender='male' image='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/71484057/1/?bust=1726517525&width=1080' website='https://www.petfinder.com/cat/grey-goose-kuwait-71484057/va/merrifield/4paws-rescue-team-va260/' /></td>
                    </tr>
                    <tr>
                        <td><Card name='Squirt' age='Kitten' breed='Maine Coon & Domestic Medium Hair' gender='male' image='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/72579299/1/?bust=1726738056&width=1080' website='https://www.petfinder.com/cat/squirt-72579299/va/vienna/a-cats-friend-inc-va872/' /></td>
                        <td><Card name='Nicholas' age='Young' breed='Domestic Shorthair' gender='male' image='https://dbw3zep4prcju.cloudfront.net/animal/6c2a3696-0a0a-46b5-bb07-2fb6a0198000/image/c9307452-1dfa-48d2-8aa2-6b1e03df247f.jpeg?versionId=vN4F55VDZM2CwmQFCHnKsa75Tx8jf4iB&bust=1726949384&width=1080' website='https://www.petfinder.com/cat/nicholas-high-energy-dog-friendly-courtesy-post-73233387/va/fairfax/helping-homeless-felines-va653/' /></td>
                        <td><Card name='Perla' age='Senior' breed='Persian' gender='female' image='https://dbw3zep4prcju.cloudfront.net/animal/dff62ef8-2e79-403e-922c-a6555dcce631/image/ccdf2f1b-1027-4df4-b66a-62128e926f21.jpg?versionId=gxS93kbHYbmo4txhO2SHFg9aErYTHyb4&bust=1712598130&width=1080' website='https://www.petfinder.com/cat/perla-62583769/va/fairfax/humane-society-of-fairfax-county-inc-va163/' /></td>
                        <td><Card name='Brownie' age='Young' breed='Persian/Himalayan' gender='female' image='https://dbw3zep4prcju.cloudfront.net/animal/1de91922-4f1c-4c28-a8ee-c44fd57156b8/image/09b0d384-715b-4beb-9716-c9518127a77f.jpeg?versionId=SOCI8IyHXm5Xg3pdh0ckNLu82PLmUmIN&bust=1726281213&width=1080' website='https://www.petfinder.com/cat/brownie-persian-himalayan-73143492/va/fairfax/helping-homeless-felines-va653/' /></td>
                    </tr>
                    <tr>
                        <td><Card name='Abby' age='Adult' breed='Abyssinian' gender='female' image='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/72975622/1/?bust=1725753748&width=1080' website='https://www.petfinder.com/cat/abby-72975622/va/herndon/fancy-cats-rescue-team-va145/' /></td>
                        <td><Card name='Tuxedo' age='Adult' breed='Oriental Shorthair' gender='male' image='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/72107441/1/?bust=1726977505&width=1080' website='https://www.petfinder.com/cat/tuxedo-needs-cage-break-72107441/va/herndon/fancy-cats-rescue-team-va145/' /></td>
                        <td><Card name='Naomi' age='Kitten' breed='Maine Coon & Domestic Long Hair' gender='female' image='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/72071338/1/?bust=1726291241&width=1080' website='https://www.petfinder.com/cat/naomi-72071338/va/vienna/a-cats-friend-inc-va872/' /></td>
                        <td><Card name='Mocca' age='Young' breed='Ragdoll' gender='female' image='https://dbw3zep4prcju.cloudfront.net/animal/30a1d343-2d02-4028-97f1-8dd2bca12319/image/5ddf1e7a-9461-45f8-8fe4-e0db64046de7.jpeg?versionId=0zNXlPvVsotYQCpDUgZb1lFIhRKgrEwK&bust=1726950846&width=1080' website='https://www.petfinder.com/cat/mocca-ragdoll-73233516/va/fairfax/helping-homeless-felines-va653/' /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Container;
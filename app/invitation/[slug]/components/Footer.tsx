

import FadeInComponent from "./FadeInComponent";
const Footer = () => {
    return(
        <footer>
        <div className="">
          <div className="text-center">
            <FadeInComponent fadeDirection="down" delay={0.18}>
              <p
                className="pt-2 pb-1 px-2"
              >
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila,
                Bapak / Ibu / Saudara / i. berkenan hadir untuk memberikan doa
                restunya kami ucapkan terimakasih.
              </p>

              <h1
                className="text-center font-sacramento my-4 text-2xl md:text-3xl py-3"
              >
                Wassalamualaikum Warahmatullahi Wabarakatuh
              </h1>
              <h1
                className="font-arabic text-2xl md:text-4xl py-4 px-2"
              >
                اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
              </h1>
              
              <hr className="mt-3 mb-2" />
            </FadeInComponent>
            
          </div>
        </div>
      </footer>
    )
}

export default Footer
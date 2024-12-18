import React from 'react'

const Banner = () => {
  return (
    <div className='bannerSection'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Empowering your child with a love for learning in a nurturing environment.
        {/* <br className="hidden lg:inline-block"/>readymade gluten */}
      </h1>
      <p className="mb-8 leading-relaxed">
        Discover a heaven for your little ones at Little Darlings. Our caring team
        ensures a safe,nurturing and engaging environment, where personalized attention 
        and the joy of learning come first!<br/>
        Our daily routine is filled with laughter,learning and love from circle time to
        outdoor play,every moment is an adventure! <br/>We strive to make our daycare feel like
        a second home for your child. Our caring team is devoted to offering a secure, nurturing
        and engaging setting, encourage exploration, play and learning.<br/>

        <h1>Why choose Little Darlings?</h1> <br/>

        At our nursery school, we are dedicated to **empowering your child with a love for learning in a
         nurturing environment.** We believe that every child is naturally curious and capable, and our goal is to foster that curiosity through engaging, age-appropriate activities 
         that spark joy and exploration. Our experienced educators create a safe, supportive space where children feel valued, encouraged, and confident to express themselves. Through a balanced approach
          of structured learning and creative play, we cultivate essential skills, from problem-solving and teamwork to creativity and resilience.
         In this nurturing atmosphere, children develop a lifelong passion for discovery, setting the
          foundation for future success both in and out of the classroom.</p>
   
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="banner.jpg" />
    </div>
  </div>
</section>
    </div>
  )
}

export default Banner
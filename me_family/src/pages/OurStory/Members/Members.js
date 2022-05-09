import memberOne from '../../../assets/images/our-story/member-1.jpg';
import memberTwo from '../../../assets/images/our-story/member-2.jpg';
import memberThree from '../../../assets/images/our-story/member-3.jpg';

const Members = () => {
  return (
    <section className='app-space py-[60px]'>
      <div className='app-container'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-font-color font-open-sans'>

          <div>
            <figure className='overflow-hidden'>
              <img src={memberOne} alt="Member 1" />
            </figure>
            <div className='py-4'>
              <h3 className='font-raleway font-bold text-lg'>Amanda Jepson</h3>
              <span className='text-sky-blue font-normal text-[13] uppercase'>Accountant</span>
            </div>
            <p className='italic text-sm text-[#777777] leading-6'>Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p>
          </div>

          <div>
            <figure className='overflow-hidden'>
              <img src={memberTwo} alt="Member 2" />
            </figure>
            <div className='py-4'>
              <h3 className='font-raleway font-bold text-lg'>Niall Katz</h3>
              <span className='text-sky-blue font-normal text-[13] uppercase'>Marketing</span>
            </div>
            <p className='italic text-sm text-[#777777] leading-6'>Aut ex esse explicabo quia harum ea accusamus excepturi. Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt.</p>
          </div>

          <div>
            <figure className='relative overflow-hidden'>
              <img src={memberThree} alt="Member 3" />
            </figure>
            <div className='py-4'>
              <h3 className='font-raleway font-bold text-lg'>Demi Lewis</h3>
              <span className='text-sky-blue font-normal text-[13] uppercase'>Financing</span>
            </div>
            <p className='italic text-sm text-[#777777] leading-6'>Amet labore numquam corrupti est. Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Members;

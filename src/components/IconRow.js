const IconAndText = ({ icon, title, description }) => {
  console.log({ icon, title ,description})
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img src={icon} alt="Icon" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
      <div>
        {title}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

const IconRow = () => {
  const rows = [
    {
      icon: './icon1.png',
      title: 'Imported from South Korea', 
      description: 'Access supercars that are up to 30% cheaper than the equivalent model in Canada'
    },
    {
      icon: './icon1.png',
      title: 'Registered & Delivered To Your Door', 
      description: 'We\'ll handle customs clearAllModuleContexts, duties, registration and delivery to your door'
    },
    {
      icon: './icon1.png',
      title: 'Inspect With Your Mechanic Before Paying', 
      description: 'Once delivered, take up to 24 hours to inspect the vehicle. Decide whether you want to keep or reject the vehicle afterwards'
    },
  ]
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
          {rows.map((row, index) => {
            <IconAndText key={index} {...row} />
          })}
        </div>
    );
}

export default IconRow
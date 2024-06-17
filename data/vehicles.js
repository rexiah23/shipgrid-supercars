const brands = [
    { name: 'Lamborghini', logo: '/logos/lamborghini.svg' },
    { name: 'Ferari', logo: '/logos/ferrari.svg' },
    { name: 'McLaren', logo: '/logos/mclaren.svg' },
    { name: 'BMW', logo: '/logos/bmw.svg' },
    { name: 'Audi', logo: '/logos/audi.svg' },
    { name: 'Mercedes', logo: '/logos/mercedes.svg' },
    { name: 'Porsche', logo: '/logos/porsche.svg' },
];

const vehicles = [
    {
        id: 1,
        year: 2010,
        make: 'Lamborghini',
        model: 'Gallardo',
        trim: 'LP560-4',
        kms: 25000,
        price: 120000,
        description: 'A powerful V10 engine with all-wheel drive performance.',
        image: '/blue_murci.png',
        gallery: ['/blue_murci.png', '/next.svg'],
        exteriorColor: 'Blue',
        interiorColor: 'Black',
        bodyStyle: 'Coupe',
        doors: 2, 
        transmission: 'Automatic', 
        engine: '5.2L V10',
        drivetrain: 'AWD',
        fuelType: 'Gasoline',
        vin: 'ZHWGU6AU0ALA09263',
        ppiCost: 2000,
        numberOfOwners: 2,
        accidentHistory: true, 
        insuranceHistoryPdf: 'https://drive.google.com/file/d/1QWNzU36OuWgbxRVf-f2_yTPGLd3rVYWx/view?usp=sharing',
        conditionReportPdf: 'https://drive.google.com/file/d/1QWNzU36OuWgbxRVf-f2_yTPGLd3rVYWx/view?usp=sharing',
    },
    
]


export { 
    brands,
    vehicles
}
const data = [
  {
    ItemName: '1800cc bottle',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: '1800cc bottle cap',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Accessory case (except wood)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Accessory case (paper/wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Accordion curtain',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Advertising papers (newspaper inserts)',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Agricultural chemicals',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Agricultural machinery',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Agricultural plastics',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Air cleaner',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Air conditioner',
    Category: "We Don't Collect",
    Notes: 'Take to Electronics Store or Recycle Center',
  },
  {
    ItemName: 'Air cushion',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Aluminium cans and caps (drinks and food containers)',
    Category: 'Recyclable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Aluminium foil',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Aluminium foil (kitchen use)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Aluminium foil tube (kitchen use)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Aluminium packaging (snacks/food bags)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Aluminium wheel (car parts)',
    Category: "We Don't Collect",
    Notes: '',
  },
  {
    ItemName: 'Amplifier',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Antenna (for TV use/BS)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Aquarium',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Ashtray',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Attaché case',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Audio rack',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Automobile (including vehicle parts)',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Baby bath',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Baby bed (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Baby bed (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Baby chair',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Baby futon',
    Category: 'Burnable',
    Notes:
      'Oversized garbage that cannot be put into a in bag, should be put out as oversized burnable',
  },
  {
    ItemName: "Baby's clothes closet",
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: "Baby's milk bottle (heat-resisting glass)",
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: "Baby's milk bottle (plastic)",
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Bag (natural leather/natural fiber)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Bag (synthetic leather/synthetic fiber)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Ball (spherical)',
    Category: 'Non-burnable',
    Notes: 'Extract air',
  },
  {
    ItemName: 'Ball-point pen (excluding metal)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Ball-point pen container (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Bamboo curtain',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Bamboo scraps',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Barbecue set',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bath lid (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bath lid (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Battery',
    Category: 'Hazardous waste',
    Notes: '',
  },
  {
    ItemName: 'Battery (automotive)',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Beach umbrella',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bed (steel/mattress)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bed (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Beer bottlecaps',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Beer bottles',
    Category: 'Recyclable',
    Notes: 'Wash inside (return to store)',
  },
  {
    ItemName: 'Belt',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bicycle',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Black tea can',
    Category: 'Recyclable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Black teabag packets',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Black teabag wrappers',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Black teabags',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Blankets (can be put out in garbage bags)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Blankets (cannot be put out in garbage bags)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Blinds',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Board (between 40cm and 2m long)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Board (less than 40cm long)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Board for preparation of fish paste',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Body stretching machine (exercise use)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Boil-in-bag bags (curry, etc.)',
    Category: 'Non-burnable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Book covers (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Book covers (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Books (hardback)',
    Category: 'Recyclable',
    Notes: 'Tie together with string',
  },
  {
    ItemName: 'Bookshelf/cupboard (other than wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bookshelf/cupboard (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Bookshelves (other than wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bookshelves (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Boots',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Bowling ball',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection',
  },
  {
    ItemName: 'Bowls (kitchen use; metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bowls (kitchen use; plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Branches (less than 40cm long and 20cm thick)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Branches (longer than 40cm)',
    Category: 'Oversized Burnable',
    Notes: 'Tie together (length 2m max.)',
  },
  {
    ItemName: 'Broken glass',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Broken glass bottles',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'BS TV tuner',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as non-burnable',
  },
  {
    ItemName: 'Bucket (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Bucket (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Burned ash',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Business-related garbage',
    Category: "We Don't Collect",
    Notes: 'Remove cap, wash inside and put in garbage collection box',
  },
  {
    ItemName: 'Cabinet (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cabinet (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Calculator (computer)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Calculator (computer) packing',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Camera',
    Category: 'Non-burnable',
    Notes: 'Recycle if possible',
  },
  {
    ItemName: 'Camera case',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Candles',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Canister',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Caramel empty box',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Caramel external wrapping film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Caramel wrapping paper (individual caramel wrappers)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Card',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cardboard',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Cardboard found in electrical cord wrapping pack',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cardboard found in firework packets',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cardboard found in toothbrush packets',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cardboard found inside stocking packets',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Carpet',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cases of CDs, MiniDiscs, DVDs, etc.',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cash Register',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cassette deck',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cassette tape',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cassette tape case',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'CD radio-cassette player',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'CDs, MiniDiscs, DVDs, etc.',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cellophane (transparent type)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cellophane cutter',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cellophane tape',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cellophane tape center',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cellophane tape packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Ceramics',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Chair (synthetic/steel)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Chair (wood/cloth)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Chest of drawers',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Chewing gum',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Chewing gum packet',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Chewing gum wrapping paper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Chicken hutch',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Child seat',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'China ornament',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Chopsticks (plastics)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Chopsticks (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cleaning cloth',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Clock',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cloth (non-recyclable)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cloth (recyclable)',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Clothes drying',
    Category: 'Oversized Non-burnable',
    Notes: 'Length 2m max.',
  },
  {
    ItemName: 'Clothes drying board',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection',
  },
  {
    ItemName: 'Clothes drying machine',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Clothes hanger (plastic housing wire)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Clothes hanger (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Clothing (non-recyclable)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Clothing (recyclable)',
    Category: 'Recyclable',
    Notes: '',
  },
  {
    ItemName: 'Coffe bottle',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: 'Coffee bean can',
    Category: 'Recyclable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Coffee bottlecap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Coffee maker',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Colander (polyethylene)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Compost container',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Compress',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Compress exterior wrapping film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Compress packets (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Confectionery cans (metal)',
    Category: 'Recyclable',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Confectionery containers (other than plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Confectionery containers (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Confectionery containers (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Construction/demolition waste',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Containers of confectionery, noodles, etc. (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Contraceptives',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cooking oil',
    Category: 'Burnable',
    Notes: 'Harden or absorb with paper',
  },
  {
    ItemName: 'Cooking oil absorbent',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cooking oil bottle (glass)',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: 'Cooking oil bottle (plastic)',
    Category: 'Plastic',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Cooking oil can',
    Category: 'Recyclable',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Cooking oil cap (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cooking oil cap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cooler (air-conditioning unit)',
    Category: "We Don't Collect",
    Notes: 'Take to Electronics Store or Recycle Center',
  },
  {
    ItemName: 'Cooler-box',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cooling gel sheet',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cork stopper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cosmetics bag (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cosmetics bottle',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cotton padding',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cotton padding packaging (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cotton swab',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cotton swab container (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Crab shell',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Crafts',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Crayon',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Crayon case (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Crayon case (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Culinary remains of fish, poultry, pork and beef',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cup (glass)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Cup (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cup noodle container',
    Category: 'Plastic',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Cup noodle container lid',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Cup noodle external wrapping film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Curtain (material that can be put in garbage bags)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Curtain (material that can not be put in garbage bags)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Curtain rail',
    Category: 'Oversized Non-burnable',
    Notes: '2 meters and above',
  },
  {
    ItemName: 'Custard pudding cardboard',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Custard pudding lids (top is paper; reverse is metallic)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Custard pudding packs/cups',
    Category: 'Plastic',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Custard pudding wrapping film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cutting board (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Cutting board (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Desk (steel)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Desk (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Desk lamp',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Desk lamp (cannot be put out in garbage bags)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Detergent carton lids/handles (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Detergent cartons',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Detergent container (liquid-containing bottles)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Detergent measuring cup (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Digital camera',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Dining table (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Dining table (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Dishwasher/dryer',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Dolls',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Domestic kotatsu',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Door (aluminium/steel)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Door (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Dresser',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Dry grass',
    Category: 'Burnable',
    Notes: 'Remove dirt',
  },
  {
    ItemName: 'Dryer',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Dryer',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Egg packs (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Egg packs (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Eggshell',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric blanket',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric carpet',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric fan',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric guitar',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric mosquito catcher',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric mosquito catcher bottle',
    Category: 'Plastic',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Electric mosquito catcher mat',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric organ',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric organ',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric pencil sharpener',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric rice cooker',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electric stove',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Electrical appliance boxes (empty; cardboard)',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Electrical appliance cushioning (styrofoam)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Electrical cord',
    Category: 'Non-burnable',
    Notes: 'Cut cord into small pieces',
  },
  {
    ItemName: 'Electrical cord wrapping pack (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Electrically heated carpet',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Empty cigarette boxes',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Empty paint cans',
    Category: 'Non-burnable',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Engine oil',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Envelopes (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Envelopes (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Eraser',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Extension cord (drum)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Extension cord (indoor type)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Facial tissue packets',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Fan (bamboo)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Fan (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Fan heater',
    Category: 'Oversized Non-burnable',
    Notes: 'Extract oil/batteries',
  },
  {
    ItemName: 'Fax machine',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Fax/telephone',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Felt-tip pen',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Film tube case',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Fire extinguisher',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Fireproof safe (less than 30cm)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Firework packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Fireworks',
    Category: 'Burnable',
    Notes: 'Soak with water',
  },
  {
    ItemName: 'Fish remains',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Fishing rod',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Fittings, sliding doors, etc. (aluminium)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Fittings, sliding doors, etc. (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Flashlight',
    Category: 'Non-burnable',
    Notes: 'Remove batteries',
  },
  {
    ItemName: 'Flier (advertising)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Flier envelopes',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Flier packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Floppy disk cases',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Floppy disks',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Flour bags (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Flowerpot (ceramic)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Flowerpot (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Flowerpot (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Fluorescent tube light cases',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Fluorescent tube light utensils',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Fluorescent tube lights (broken)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Fluorescent tube lights (not broken)',
    Category: 'Hazardous waste',
    Notes: '',
  },
  {
    ItemName: 'Food tray',
    Category: 'Plastic',
    Notes: "Put white polystyrene out as 'Recyclable Garbage'",
  },
  {
    ItemName: 'Freezer',
    Category: "We Don't Collect",
    Notes: 'Take to Electronics Store or Recycle Center',
  },
  {
    ItemName: 'Frisbee',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Fruit peel',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Fruit/vegetable net containers',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Frying pan',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Futon (can be put out in garbage bags)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Futon (cannot be put out in garbage bags)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Futon drying machine',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Game console',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Game software',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Gas burner',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Gas burner',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Gas canister for portable gas stove',
    Category: 'Non-burnable',
    Notes: 'Empty and pierce',
  },
  {
    ItemName: 'Gas heater',
    Category: 'Oversized Non-burnable',
    Notes: 'Remove batteries',
  },
  {
    ItemName: 'Gas kettle',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Gas mat (aluminium)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Gas tank (propane)',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Gasoline',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Geta (traditional wooden Japanese shoes)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Glass',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Glass',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Glass bottle (food container)',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: 'Glass bottles (food/drink use)',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: 'Glass door',
    Category: 'Oversized Non-burnable',
    Notes: 'Wooden construction scraps',
  },
  {
    ItemName: 'Gloves',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Gloves (natural/synthetic fibers)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Gloves (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Glue',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Glue (stationery use)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Golf clubs/golf bag',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Grass/Flower',
    Category: 'Burnable',
    Notes: 'Remove dirt',
  },
  {
    ItemName: 'Grocery cans',
    Category: 'Recyclable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Guitar (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Hair products/hair tonic containers (glass)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Hair products/hair tonic containers (plastic)',
    Category: 'Plastic',
    Notes: 'Take to Electronics Store or Recycle Center',
  },
  {
    ItemName: 'Hair products/hair tonic containers (sprays)',
    Category: 'Non-burnable',
    Notes: 'Empty and pierce',
  },
  {
    ItemName: 'Hair spray can',
    Category: 'Non-burnable',
    Notes: 'Empty and pierce',
  },
  {
    ItemName: 'Hair spray cap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Hair spray wrapping film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Hairbrush (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Hairbrush (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Hairpin',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Hamburger pack (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Hammer (home use)',
    Category: 'Non-burnable',
    Notes: 'Small ItemNames only',
  },
  {
    ItemName: 'Handbag',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Handkerchief',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Hats',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Heater (electric)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Heater (oil)',
    Category: 'Oversized Non-burnable',
    Notes: 'Extract oil/batteries',
  },
  {
    ItemName: 'Heat-resisting glass',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Helmet',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Home-use wrapping paper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Hose',
    Category: 'Non-burnable',
    Notes: 'Cut into small pieces and put in bags',
  },
  {
    ItemName: 'Hot plate (cooking device)',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as oversized non-burnable',
  },
  {
    ItemName: 'Hot water dispenser',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Ice cooling pack',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Ice cream cup (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Ice cream cup (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Ice cream cup lid (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Ice cream cup lid (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Industrial waste',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Insecticide',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Insecticide outer packing (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Iron',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Ironing board',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Jam jar',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: 'Jam jar lid (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Japanese clothes',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Japanese lunch box (aluminium)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Japanese lunch box (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Japanese lunch box case',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Japanese lunch box container (convenience store type, etc.)',
    Category: 'Plastic',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Japanese lunch box container (convenience',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Juice can (aluminium/steel)',
    Category: 'Recyclable',
    Notes: 'Wash inside thoroughly',
  },
  {
    ItemName: 'Kenzan (flower-arranging tool)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Ketchup container (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Ketchup tube (broken)',
    Category: 'Burnable',
    Notes: 'Contains leftovers',
  },
  {
    ItemName: 'Ketchup tube (not broken)',
    Category: 'Plastic',
    Notes: 'Inside washed',
  },
  {
    ItemName: 'Ketchup tube cap',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Kettle',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Key chain',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Keyboard (musical instrument)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Kimono',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Kitchen knife',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Kitchen-use detergent bottles, etc.',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Knapsack',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Knitting machine',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Knitting wool',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Kotatsu or kotatsu board',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Ladders (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: 'Length 2m max.',
  },
  {
    ItemName: 'Ladders (wood)',
    Category: 'Oversized Burnable',
    Notes: 'Length 2m max.',
  },
  {
    ItemName: 'Laser-Disc players',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as non-burnable',
  },
  {
    ItemName: 'Laundry cleaning paper bag',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Laundry cleaning plastic bag',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Laundry cleaning polyethylene bag',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Laundry nets',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Laundry starch container',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Laundry starch container cap',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Lawnmower',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Leaves',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Leaves/branches of garden shrubs (between',
    Category: 'Oversized Burnable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Leaves/branches of garden shrubs (less than',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Leftover rice',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Letters',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Light bulb',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Lighter (used)',
    Category: 'Non-burnable',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Lighting equipment',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Lipstick',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Lipstick containers (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Lipstick containers (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Locker (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Locker (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Logs (less than 20cm diameter, shorter than 2m)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Magazines',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Magnifying glass',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Marker pen/permanent marker (other than plastic)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Marker pen/permanent marker (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Masks',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Massage machine',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Matchboxes (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Matches',
    Category: 'Burnable',
    Notes: 'Soak with water',
  },
  {
    ItemName: 'Mattress (including springs)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Mattress (no springs)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Mayonnaise external film (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Mayonnaise tube',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Mayonnaise tube (broken)',
    Category: 'Burnable',
    Notes: 'Contains leftovers',
  },
  {
    ItemName: 'Mayonnaise tube (not broken)',
    Category: 'Plastic',
    Notes: 'Inside washed',
  },
  {
    ItemName: 'Mechanical pencil',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Mechanical pencil lead',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Medical system waste',
    Category: "We Don't Collect",
    Notes: '',
  },
  {
    ItemName: 'Medicine (pills/capsules, etc.)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Medicine bottles',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Medicine packets (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Melon casing (styrofoam)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Metal scraps',
    Category: 'Non-burnable',
    Notes: 'Wooden construction scraps',
  },
  {
    ItemName: 'Microwave oven',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Milk bottle',
    Category: 'Recyclable',
    Notes: '',
  },
  {
    ItemName: 'Milk bottle cap (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Milk bottle cap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Milk carton (silver interior)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Milk carton (white interior)',
    Category: 'Recyclable',
    Notes: 'Washed, opened, tied together',
  },
  {
    ItemName: 'Milk powder can',
    Category: 'Recyclable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Milk powder can lid (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Mini stereo',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'MiniDisc radio cassette',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as non-burnable',
  },
  {
    ItemName: 'MiniDisc recorder',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as non-burnable',
  },
  {
    ItemName: 'Mirror',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Mirror (hand-mirror)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Mixer',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Motorbike (including parts)',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Mustard tubes',
    Category: 'Plastic',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Nail',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Neckties',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Needles',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Newspaper',
    Category: 'Recyclable',
    Notes: 'Tie together with string',
  },
  {
    ItemName: 'Noodle bags',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Notebook',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Nutrition drink bottlecaps (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Nutrition drink bottles',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: 'Obon (except wood)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Obon (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Oil',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Oil absorbents, fixation agents',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Oil paper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Old clothes (non-recyclable)',
    Category: 'Burnable',
    Notes: 'Washed ItemNames',
  },
  {
    ItemName: 'Old clothes (recyclable)',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Organ',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Oven toaster',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Pachinko table',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Pacifier',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Packaging of medicine (pills/capsules, etc.)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Packing string (including PP bands)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paint',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Paints',
    Category: 'Non-burnable',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Panty hose',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paper bag',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paper candy wrapper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paper cup',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paper diaper',
    Category: 'Burnable',
    Notes: 'Flush garbage in toilet',
  },
  {
    ItemName: 'Paper drink carton (white interior)',
    Category: 'Recyclable',
    Notes: 'Washed, opened, tied together',
  },
  {
    ItemName: 'Paper drink carton (silver interior)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paper juice cartons (inside is silver)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paper juice cartons (inside is white)',
    Category: 'Recyclable',
    Notes: 'Wash and tie together',
  },
  {
    ItemName: 'Paper plate',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paper twine',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paperwaste',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Paperweight',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Partitions',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Pencil',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Periodicals',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Personal computer (desktop/laptop)',
    Category: "We Don't Collect",
    Notes: 'Return to store',
  },
  {
    ItemName: 'Personal computer rack',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'personal seal (except wood)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'personal seal (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: "Pets' bed's urine adsorbent",
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Photo albums (cellophane/synthetic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Photo albums (paper/cloth)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Photocopier',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Photograph negatives',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Photographs',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Piano',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Picture frame (except wood)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Picture frame (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Pillows and pillow covers',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Plastic bottlecaps (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic bottles',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside',
  },
  {
    ItemName: 'Plastic candy packet',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic candy wrapper',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic juice bottle (with recyclable mark)',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside and put in garbage collection box',
  },
  {
    ItemName: 'Plastic juice bottlecap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic medicine containers',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic model motors',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Plastic model parts container (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic models',
    Category: 'Plastic',
    Notes: 'Remove batteries',
  },
  {
    ItemName: "Plastic models' metallic parts",
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Plastic packaging of towel (lunch box accessory)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic roof coating',
    Category: 'Burnable',
    Notes: 'Put out unwinded',
  },
  {
    ItemName: 'Plastic storage bin case',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Plastic wrap',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Plastic wrap case (cutting edge removed)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Plastic wrap case cutting edge',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Plastic wrap tube',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Plates (glass/ceramic)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Polyethylene buckets',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Popsicle stick (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Portable gas stove',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Portable word-processor',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Postcards',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Potato chip bags, etc. (outside is plastic, inside',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Potato chip tube container base (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Potato chip tube container lids (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Potato chip tube container lids (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Potato chip tube containers (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Pots',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Pottery',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Pounding mochi machine (electric/gas)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Printer',
    Category: 'Oversized Non-burnable',
    Notes: 'Non-burnable garbage in bags',
  },
  {
    ItemName: 'Push cart',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Radio',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as oversized non-burnable',
  },
  {
    ItemName: 'Radio-cassette',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as oversized non-burnable',
  },
  {
    ItemName: 'Rag',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Raincoat',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Raincoat (rain gear)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Razors, blades, etc.',
    Category: 'Non-burnable',
    Notes: 'Wrap in paper and write the contents',
  },
  {
    ItemName: 'Reception chair',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Reception desk (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Reception desk (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Record sleeves (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Records',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Refrigerator',
    Category: "We Don't Collect",
    Notes: 'Take to Electronics Store or Recycle Center',
  },
  {
    ItemName: 'Rice bags (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Rice bags (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Rice bin',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Rice bowl',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Rice cooker (gas/electric)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Rice cooker metal jar',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Rope (cloth)',
    Category: 'Burnable',
    Notes: 'Cut into small pieces',
  },
  {
    ItemName: 'Rope (plastic)',
    Category: 'Plastic',
    Notes: 'Cut into small pieces',
  },
  {
    ItemName: 'Rope scraps',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Rubber bands',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Rubber glove',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Rubber goods',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Rug mat',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Ruler (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Ruler (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Sake container (inside of container is silver)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Sake container (inside of container is white)',
    Category: 'Recyclable',
    Notes: 'Washed, opened, tied together',
  },
  {
    ItemName: 'Sake container cap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Salad oil',
    Category: 'Burnable',
    Notes: 'Harden or absorb with paper',
  },
  {
    ItemName: 'Salad oil bottle',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sandals',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sanitary goods',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Sanitary goods packets (wrappers/bags)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sauce container caps (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sauce containers (glass)',
    Category: 'Non-burnable',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Sauce containers (plastic)',
    Category: 'Plastic',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Saucepan',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Scales/body fat measuring devices',
    Category: 'Non-burnable',
    Notes: 'Remove batteries',
  },
  {
    ItemName: 'Scissors',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Scooter (including parts)',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Screen door',
    Category: 'Oversized Non-burnable',
    Notes: 'Wooden construction scraps',
  },
  {
    ItemName: 'Senbei (Japanese snack) wrappers (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Setting pin',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Setting pin case (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sewing machine',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Sewing needle',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Shampoo bottle',
    Category: 'Plastic',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Sheets',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Shellfish',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Shirt packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Shirts (cotton)',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Shirts (except cotton)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Shitajiki (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Shitajiki (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Shoe rack (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Shoe rack (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Shoes',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Shopping bag (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Shopping bag (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Shopping bags from convenience stores, etc.',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Shrimp shell',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Sideboards (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Sideboards (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Silver paper found in tobacco boxes',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Sink strainer (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Sink strainer (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Skateboard',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Skewer ( bamboo skewers of grilled chicken/o-dango , etc.)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Ski equipment',
    Category: 'Oversized Non-burnable',
    Notes: 'Less than 2m',
  },
  {
    ItemName: 'Sliding doors',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Slippers',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Snowboard',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Soap',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Soap packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sock packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Socks',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Sofa',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Soy sauce bottle (plastic; recyclable)',
    Category: 'Recyclable',
    Notes: 'Remove cap, wash inside and put in garbage collection box',
  },
  {
    ItemName: 'Soy sauce bottlecap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Soy-preserved food bottle (empty; glass)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Soy-preserved food bottle cap (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Speaker (separate)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Spectacles',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Splittable chopstick packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Splittable chopsticks (disposabel)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Sponge',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sponge kitchen cleaners',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Sponge packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sports shoes',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Spray-can',
    Category: 'Non-burnable',
    Notes: 'Empty and pierce',
  },
  {
    ItemName: 'Spray-can cap (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Spray-paint cans',
    Category: 'Non-burnable',
    Notes: 'Empty and pierce',
  },
  {
    ItemName: 'Spray-paint plastic caps',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Staple wire',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Staples',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Steel can (drink/food use)',
    Category: 'Recyclable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Steel chair/desk',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Stepladder',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Stereo',
    Category: 'Oversized Non-burnable',
    Notes: 'Non-burnable garbage in ifu put in bags',
  },
  {
    ItemName: 'Stocking packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Stockings',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Storage room (prefabricated, dismantled)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Stove',
    Category: 'Oversized Non-burnable',
    Notes: 'Remove batteries',
  },
  {
    ItemName: 'Stove unit',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Straining net (kitchenware)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Straw packets (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Straw packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Strawberry pack',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Straws',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'String (paper/textile)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'String (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Stroller',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Strong poison',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Stuffed toy (can be put out in garbage bags)',
    Category: 'Burnable',
    Notes: 'Remove batteries',
  },
  {
    ItemName: 'Stuffed toy (cannot be put out in garbage bags)',
    Category: 'Oversized Burnable',
    Notes: 'Remove batteries',
  },
  {
    ItemName: 'Styrofoam',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Sugar stick wrapping paper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Suitcase',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Surfboard',
    Category: 'Oversized Non-burnable',
    Notes: 'Less than 2m',
  },
  {
    ItemName: 'Table (except wood)',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Table (wood)',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Tatami mats',
    Category: 'Oversized Burnable',
    Notes: '',
  },
  {
    ItemName: 'Tea can',
    Category: 'Recyclable',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Teacups',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Teapot',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Telephone/cell phone',
    Category: 'Non-burnable',
    Notes: 'Remove batteries',
  },
  {
    ItemName: 'Television',
    Category: "We Don't Collect",
    Notes: 'Take to Electronics Store or Recycle Center',
  },
  {
    ItemName: 'Television stand',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Tempura oil (cooking oil)',
    Category: 'Burnable',
    Notes: 'Harden or absorb with paper',
  },
  {
    ItemName: 'Textbook',
    Category: 'Recyclable',
    Notes: 'Tie together',
  },
  {
    ItemName: 'Thumbtack',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Tinplate',
    Category: 'Oversized Non-burnable',
    Notes: 'Put out unwinded',
  },
  {
    ItemName: 'Tires (auto parts)',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized',
  },
  {
    ItemName: 'Tissue box ejection film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Tissue box wrapping film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Tissue cases (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Tissue paper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Tobacco ashes',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Tobacco wrapping film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Tofu packets/lids',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Tofu packets/lids',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Toilet paper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Toilet paper packing',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Toilet paper tube',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Toothbrush',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Toothbrush packing (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Toothpaste tubes',
    Category: 'Plastic',
    Notes: 'Empty contents',
  },
  {
    ItemName: 'Towel (lunch box accessory)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Toys (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Toys (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Toys (wood)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Training machine',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Transistor radio',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Trays',
    Category: 'Plastic',
    Notes: 'Except white polystyrene',
  },
  {
    ItemName: 'Trays (white styrofoam)',
    Category: 'Recyclable',
    Notes: '',
  },
  {
    ItemName: 'Tricycle',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Trouser press',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Typewriter',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Umbrella',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Umbrella stand (other than wood)',
    Category: 'Non-burnable',
    Notes:
      'Material that can not be put in garbage bag, should be put out as oversized non-burnable',
  },
  {
    ItemName: 'Umbrella stand (wood)',
    Category: 'Burnable',
    Notes:
      'Material that can not be put in garbage bag, should be put out as oversized burnable',
  },
  {
    ItemName: 'Underwear',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Unicycle',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Used chiropractic patch packets (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Used chiropractic patches',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Used tea leaves',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Vacuum cleaner',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Vase',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Vegetable peel',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Ventilation fan',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Ventilation fan cover (aluminium)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Ventilation fan cover (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Video camera',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Video cassette recorder',
    Category: 'Non-burnable',
    Notes:
      'Oversized garbage that cannot be put into a bag, should be put out as non-burnable',
  },
  {
    ItemName: 'Videotape',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Videotape cases',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Vinyl-covered shed',
    Category: 'Plastic',
    Notes: 'Cut into small pieces',
  },
  {
    ItemName: 'Wash basin (metal)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Wash basin (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Washing machine',
    Category: "We Don't Collect",
    Notes: 'Take to Electronics Store or Recycle Center',
  },
  {
    ItemName: 'Waste oil',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized supplier)',
  },
  {
    ItemName: 'Water-heater',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Weight stone',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection',
  },
  {
    ItemName: 'Wheelchair',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Wheels',
    Category: "We Don't Collect",
    Notes: 'Refuse Collection (take to specialized',
  },
  {
    ItemName: 'Wigs',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Window box',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Wire',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Wood chips',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Wooden pole (longer than 40cm)',
    Category: 'Oversized Burnable',
    Notes: 'Length 2m max.',
  },
  {
    ItemName: 'Wooden pole (shorter than 40cm)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Word processor',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Word processor ink ribbon',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Word processor ink ribbon container (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Working gloves',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Wrapping paper',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Wristwatch',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Yoghurt cup (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Yoghurt cup (plastic)',
    Category: 'Plastic',
    Notes: 'Wash inside',
  },
  {
    ItemName: 'Yoghurt lid (aluminium)',
    Category: 'Non-burnable',
    Notes: '',
  },
  {
    ItemName: 'Yoghurt lid (paper)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Yoghurt lid (plastic)',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Yoghurt thin external film',
    Category: 'Plastic',
    Notes: '',
  },
  {
    ItemName: 'Zabuton (flat floor cushion)',
    Category: 'Burnable',
    Notes: '',
  },
  {
    ItemName: 'Zaisu (small chair used on tatami )',
    Category: 'Oversized Non-burnable',
    Notes: '',
  },
];

export default data;

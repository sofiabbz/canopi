-- amazonia fauna
UPDATE biomes SET fauna = jsonb_set(fauna, '{categories}', '["Mamífero","Ave","Réptil","Anfíbio","Peixe"]')
WHERE slug = 'amazonia';

-- amazonia flora
UPDATE biomes SET flora = jsonb_set(flora, '{categories}', '["Árvore","Palmeira","Flor","Aquática"]')
WHERE slug = 'amazonia';

-- cerrado fauna
UPDATE biomes SET fauna = jsonb_set(fauna, '{categories}', '["Mamífero","Ave","Réptil","Anfíbio","Inseto"]')
WHERE slug = 'cerrado';

-- cerrado flora
UPDATE biomes SET flora = jsonb_set(flora, '{categories}', '["Árvore","Arbusto","Gramínea","Flor"]')
WHERE slug = 'cerrado';

-- caatinga fauna
UPDATE biomes SET fauna = jsonb_set(fauna, '{categories}', '["Mamífero","Ave","Réptil","Anfíbio","Aracnídeo"]')
WHERE slug = 'caatinga';

-- caatinga flora
UPDATE biomes SET flora = jsonb_set(flora, '{categories}', '["Cactácea","Árvore","Arbusto","Bromélia"]')
WHERE slug = 'caatinga';

-- pampa fauna
UPDATE biomes SET fauna = jsonb_set(fauna, '{categories}', '["Mamífero","Ave","Réptil","Anfíbio","Peixe"]')
WHERE slug = 'pampa';

-- pampa flora
UPDATE biomes SET flora = jsonb_set(flora, '{categories}', '["Gramínea","Flor","Arbusto","Leguminosa"]')
WHERE slug = 'pampa';

-- pantanal fauna
UPDATE biomes SET fauna = jsonb_set(fauna, '{categories}', '["Mamífero","Ave","Réptil","Anfíbio","Peixe"]')
WHERE slug = 'pantanal';

-- pantanal flora
UPDATE biomes SET flora = jsonb_set(flora, '{categories}', '["Árvore","Aquática","Gramínea","Palmeira"]')
WHERE slug = 'pantanal';

-- mata-atlantica fauna
UPDATE biomes SET fauna = jsonb_set(fauna, '{categories}', '["Mamífero","Ave","Réptil","Anfíbio","Peixe"]')
WHERE slug = 'mata-atlantica';

-- mata-atlantica flora
UPDATE biomes SET flora = jsonb_set(flora, '{categories}', '["Árvore","Bromélia","Orquídea","Samambaia"]')
WHERE slug = 'mata-atlantica';

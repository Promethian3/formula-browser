

class Formula {
    constructor(
        {
            Code=null, 
            Brand=null, 
            Name=null, 
            Meat=null, 
            Ingredients=null, 
            Allergens=null, 
            Shelf_Life=null, 
            Notes=null
        }
    ) {
        this.setCode(Code);
        this.setBrand(Brand);
        this.setName(Name);
        this.setMeat(Meat);
        this.setIngredients(Ingredients);
        this.setAllergens(Allergens);
        this.setShelfLife(Shelf_Life);
        this.setNotes(Notes);
    }
    getCode() { return this.Code; }
    getBrand() { return this.Brand; }
    getName() { return this.Name; }
    getMeat() { return this.Meat; }
    getIngredients() { return this.Ingredients; }
    getAllergens() { return this.Allergens; }
    getShelfLife() { return this.Shelf_Life; }
    getNotes() { return this.Notes; }

    setCode(Code=null) {
        this.Code = Code;
        return this;
    }
    setBrand(Brand=null) {
        this.Brand = Brand;
        return this;
    }
    setName(Name=null) {
        this.Name = Name;
        return this;
    }
    setMeat(Meat=null) {
        this.Meat = Meat;
        return this;
    }
    setIngredients(Ingredients=null) {
        this.Ingredients = !Ingredients ? [] : Ingredients.map(
            ing => (
                { 
                    code: ing.code, 
                    name: ing.name, 
                    percent: ing.percent
                }
            )
        );
        return this;
    }
    setAllergens(Allergens=null) {
        this.Allergens = !Allergens ? [] : [...Allergens];
        return this;
    }
    setShelfLife(Shelf_Life=null) {
        this.Shelf_Life = Shelf_Life;
        return this;
    }
    setNotes(Notes=null) {
        this.Notes = !Notes ? [] : [...Notes];
        return this;
    }
    update(
        {
            Code=null, 
            Brand=null, 
            Name=null, 
            Meat=null, 
            Ingredients=null, 
            Allergens=null, 
            Shelf_Life=null, 
            Notes=null
        }
    ) {
        Code && this.setCode(Code);
        Brand && this.setBrand(Brand);
        Name && this.setName(Name);
        Meat && this.setMeat(Meat);
        Ingredients && this.setIngredients([...this.Ingredients, ...Ingredients]);
        Allergens && this.setAllergens([...this.Allergens, ...Allergens]);
        this.setShelfLife(Shelf_Life);
        Notes && this.setNotes([...this.Notes, ...Notes]);
    }

}
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject= (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false

    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }
    //Apenas para visualisar o menu escolhido.
    //console.log(returnObject);
    
    return returnObject;
}
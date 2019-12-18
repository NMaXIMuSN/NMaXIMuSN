// let n = 5488;
// console.log(n.toString(3));

// let a =372811;
// console.log(a.toString(5));


// console.log(b.toString(4));

// n=753979641;
// console.log(n.toString(3));
    // let b='asdfasdfasdf';
    // let a=b.length;
    // console.log(a);
    // b[5].toUpperCase();
    // console.log(b);

    let str = 'Ослик Иа-Иа посмотрел на виадук';

    let target = 'Иа'; // цель поиска
    
    let pos = 0;
    while (true) {
      let foundPos = str.indexOf(target, pos);
      if (foundPos == -1) break;
    
      console.log( `Найдено тут: ${foundPos}` );
      pos = foundPos + 1; // продолжаем со следующей позиции
    }    
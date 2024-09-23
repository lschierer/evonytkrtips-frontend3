enum Color  {
  light,
  dark,
}

enum Scale {
  medium,
  large
}

export const updateTheme = async (color: Color, scale: Scale = Scale.medium) => {
  const base = window.document.querySelector('body.spectrum');

  console.log(`updateTheme running`);
    
  if(base) {
    if(color == Color.light){
      if(scale == Scale.medium) {
        base.className = [
          'spectrum',
          'spetrum--medium',
          'spectrum--light'
        ].join(' ');
      }
      else {
        console.error('unsupported value for scale');
      }
    }
    else if(color == Color.dark) {
      if(scale == Scale.medium) {
        base.className = [
          'spectrum',
          'spetrum--medium',
          'spectrum--dark'
        ].join(' ');
      }
      else {
        console.error('unsupported value for scale');
      }
    }
    else {
      console.error(`attempt to set unsupported color ${color}`);
      base.className = [
        'spectrum',
      ].join(' ');
    }
  }

};

updateTheme(Color.light, Scale.medium);

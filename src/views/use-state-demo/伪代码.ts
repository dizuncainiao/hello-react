interface Ref<T> {
  value: T;
}

function ref<T>(value: T) {
  return {
    value,
  };
}

function useRef<T = unknown>(
  initialValue: T,
): [Ref<T>, (value: T) => void] {
  const state = ref(initialValue);

  return [
    state,
    function (value: T) {
      state.value = value;
    },
  ];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [num, setNum] = useRef(0);

const num2 = ref(0);

console.log(num);
console.log(num2);

setNum(num.value + 1);
num2.value = num2.value + 1;

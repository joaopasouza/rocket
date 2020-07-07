import { classed } from 'classed-components';

export const Container = classed.button(({ variant, block, size, flat }) => {
  return [
    'btn',
    {
      'btn-default': variant === 'default',
      'btn-primary': variant === 'primary',
      'btn-success': variant === 'success',
      'btn-info': variant === 'info',
      'btn-danger': variant === 'danger',
      'btn-warning': variant === 'warning',
      'bg-olive': variant === 'olive',
      'bg-purple': variant === 'purple',
      'bg-navy': variant === 'navy',
      'bg-orange': variant === 'orange',
      'bg-maroon': variant === 'maroon',
      'btn-block': block,
      'btn-lg': size === 'lg',
      'btn-sm': size === 'sm',
      'btn-xs': size === 'xs',
      'btn-flat': flat,
    },
  ];
});

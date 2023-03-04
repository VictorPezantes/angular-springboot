import { getClientRect, getOuterSizes, getStyleComputedProperty } from '../utils/index';
export function arrow(data) {
    var _a;
    var targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    var arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < targetOffsets[side]) {
        targetOffsets[side] -=
            targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(data.offsets.host[side]) + Number(arrowElementSize) > targetOffsets[opSide]) {
        targetOffsets[side] +=
            Number(data.offsets.host[side]) + Number(arrowElementSize) - Number(targetOffsets[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // compute center of the target
    var center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.target);
    var targetMarginSide = parseFloat(css["margin" + sideCapitalized]);
    var targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
    var sideValue = center - targetOffsets[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = (_a = {},
        _a[side] = Math.round(sideValue),
        _a[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
    ,
        _a);
    data.instance.arrow = arrowElement;
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9tb2RpZmllcnMvYXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4RixNQUFNLFVBQVUsS0FBSyxDQUFDLElBQVU7O0lBQzlCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3hDLDJEQUEyRDtJQUMzRCxJQUFNLFlBQVksR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRGLHVEQUF1RDtJQUN2RCxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFNLFVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXBFLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDNUMsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwRCxJQUFNLElBQUksR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1QyxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQy9DLElBQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTFELGdCQUFnQjtJQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixHQUFJLGFBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDOUUsYUFBcUIsQ0FBQyxJQUFJLENBQUM7WUFDekIsYUFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLENBQUM7S0FDakY7SUFDRCxvQkFBb0I7SUFDcEIsSUFBSSxNQUFNLENBQUUsSUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBSSxhQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3ZHLGFBQXFCLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU0sQ0FBRSxJQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBRSxhQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDaEg7SUFDRCxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTdDLCtCQUErQjtJQUMvQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUUsSUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXBILHlEQUF5RDtJQUN6RCwwRUFBMEU7SUFDMUUsSUFBTSxHQUFHLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUzRCxJQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBUyxlQUFpQixDQUFDLENBQUMsQ0FBQztJQUNyRSxJQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBUyxlQUFlLFVBQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUUsSUFBSSxTQUFTLEdBQ1gsTUFBTSxHQUFJLGFBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFFOUUsd0VBQXdFO0lBQ3hFLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXBGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztRQUNoQixHQUFDLElBQUksSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM3QixHQUFDLE9BQU8sSUFBRyxFQUFFLENBQUMsa0VBQWtFOztXQUNqRixDQUFDO0lBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBRW5DLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENsaWVudFJlY3QsIGdldE91dGVyU2l6ZXMsIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyb3coZGF0YTogRGF0YSkge1xuICBsZXQgdGFyZ2V0T2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy50YXJnZXQ7XG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXG4gIGNvbnN0IGFycm93RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZGF0YS5pbnN0YW5jZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoZGF0YS5wbGFjZW1lbnQpICE9PSAtMTtcblxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgKHRhcmdldE9mZnNldHMgYXMgYW55KVtzaWRlXSkge1xuICAgICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gLT1cbiAgICAgICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gLSAoZGF0YS5vZmZzZXRzLmhvc3Rbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChOdW1iZXIoKGRhdGEgYXMgYW55KS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGFycm93RWxlbWVudFNpemUpID4gKHRhcmdldE9mZnNldHMgYXMgYW55KVtvcFNpZGVdKSB7XG4gICAgKHRhcmdldE9mZnNldHMgYXMgYW55KVtzaWRlXSArPVxuICAgICAgTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSAtIE51bWJlcigodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW29wU2lkZV0pO1xuICB9XG4gIHRhcmdldE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHRhcmdldE9mZnNldHMpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSB0YXJnZXRcbiAgY29uc3QgY2VudGVyID0gTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyKTtcblxuICAvLyBDb21wdXRlIHRoZSBzaWRlVmFsdWUgdXNpbmcgdGhlIHVwZGF0ZWQgdGFyZ2V0IG9mZnNldHNcbiAgLy8gdGFrZSB0YXJnZXQgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgY29uc3QgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UudGFyZ2V0KTtcblxuICBjb25zdCB0YXJnZXRNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdKTtcbiAgY29uc3QgdGFyZ2V0Qm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdKTtcbiAgbGV0IHNpZGVWYWx1ZSA9XG4gICAgY2VudGVyIC0gKHRhcmdldE9mZnNldHMgYXMgYW55KVtzaWRlXSAtIHRhcmdldE1hcmdpblNpZGUgLSB0YXJnZXRCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHRhcmdldFxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih0YXJnZXRPZmZzZXRzW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLm9mZnNldHMuYXJyb3cgPSB7XG4gICAgW3NpZGVdOiBNYXRoLnJvdW5kKHNpZGVWYWx1ZSksXG4gICAgW2FsdFNpZGVdOiAnJyAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcbiAgfTtcblxuICBkYXRhLmluc3RhbmNlLmFycm93ID0gYXJyb3dFbGVtZW50O1xuXG4gIHJldHVybiBkYXRhO1xufVxuIl19
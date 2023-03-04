/**
 * Finds the root node (document, shadowDOM root) of the given element
 */
export function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Um9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVU7SUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtRQUM1QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDakM7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3Qobm9kZTogTm9kZSk6IGFueSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXX0=
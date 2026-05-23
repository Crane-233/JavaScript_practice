/***************************************************************************/
/* Library of simple ascii drawing functions                               */
/***************************************************************************/




function newLine()
/***************************************************************************/
/* returns a string consisting of the new line (carriage return) character */
/***************************************************************************/
{
    return '<BR>'
};
/****************************End of function********************************/



function star()
/***************************************************************************/
/* returns a string consisting of the star (asterix) character             */
/***************************************************************************/
{
    return '* '
};
/****************************End of function********************************/



function space()
/***************************************************************************/
/* returns a string consisting of two space characters                     */
/***************************************************************************/
{
    return '&nbsp' + '&nbsp'
};
/****************************End of function********************************/



function lines(noOfNewLines)
/***************************************************************************/
/*Function takes one whole number argument - noOfLines. Function returns a */
/* string consisting of noOfLines of new line characters                   */
/***************************************************************************/
{
    var newLineString = '';
    for (var position = 0; position < noOfNewLines; position = position + 1)
    {
        newLineString = newLineString + '<BR>'
    };
    return newLineString
};
/****************************End of function********************************/



function stars(noOfStars)
/***************************************************************************/
/*Function takes one whole number argument - noOfStars. Function returns a */
/* string consisting of noOfStars of star characters                       */
/***************************************************************************/
{
    var starString = '';
    for (var position = 0; position < noOfStars; position = position + 1)
    {
        starString = starString + '* '
    };
    return starString
};
/****************************End of function********************************/




function spaces(noOfSpaces)
/****************************************************************************/
/*Function takes one whole number argument - noOfSpaces. Function returns a */
/* string consisting of noOfSpaces of double space characters               */
/****************************************************************************/
{
    var spaceString = '';
    for (var position = 0; position < noOfSpaces; position = position + 1)
    {
        spaceString = spaceString + space()
    };
    return spaceString
};
/****************************End of function********************************/



function drawSquare(colour, indent)
/*****************************************************************************/
/* Function draws a square, 10 stars wide and 10 stars high.                 */
/* The function takes two arguments:                                         */
/* colour - a string that specifies the colour of the rectangle.             */
/* indent - a whole number which specifies the number of spaces the          */
/* square is indented from the left-hand side of the page.                   */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var width = 10;
    var height = 10;
    var outputString = '<TT>';
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    for (lines = 0; lines < height; lines = lines + 1)
    {
        outputString = outputString + spaces(indent) + stars(width) + newLine()
    };
    outputString = outputString + '</TT>';
    outputString = outputString.fontsize(2);
    document.write(outputString.fontcolor(theColour))
};
/****************************End of function********************************/




function drawLine(length, colour, indent)
/*****************************************************************************/
/* Function draws a line and takes three arguments: .                        */
/* length - a whole number representing the length of the line.              */
/* colour - a string that specifies the colour of the line.                  */
/* indent - a whole number which specifies the number of spaces the          */
/* line is indented from the left-hand side of the page.                     */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var outputString = '<TT>';
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    outputString = outputString + spaces(indent) + stars(length) + newLine(); + '</TT>';
    outputString = outputString.fontsize(2);
    document.write(outputString.fontcolor(theColour))
};
/****************************End of function********************************/



function drawAcuteLine(length, colour, indent)
/*****************************************************************************/
/* Function draws an oblique line (/) and takes three arguments:             */
/* length - a whole number representing the length of the line.              */
/* colour - a string that specifies the colour of the line.                  */
/* indent - a whole number which specifies the number of spaces the          */
/* line is indented from the left-hand side of the page.                     */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var outputString = '<TT>';
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    for (lines = length; lines > 0; lines = lines - 1)
    {
        outputString = outputString + spaces(indent) + spaces(lines - 1) + star() + newLine()
    };
    outputString = outputString  + '</TT>';
    outputString = outputString.fontsize(2);
    document.write(outputString.fontcolor(theColour))
};
/****************************End of function********************************/




function drawAgraveLine(length, colour, indent)
/*****************************************************************************/
/* Function draws an oblique  line (\) and takes three arguments:            */
/* length - a whole number representing the length of the line.              */
/* colour - a string that specifies the colour of the line.                  */
/* indent - a whole number which specifies the number of spaces the          */
/* line is indented from the left-hand side of the page.                     */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var outputString = '<TT>';
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    for (lines = 1; lines < length + 1; lines = lines + 1)
    {
        outputString = outputString + spaces(indent) + spaces(lines - 1) + star() + newLine()
    };
    outputString = outputString  + '</TT>';
    outputString = outputString.fontsize(2);
    document.write(outputString.fontcolor(theColour))
};
/****************************End of function********************************/


function drawRectangle(height,width,colour,indent)
/*****************************************************************************/
/* Function draws a rectangle and takes four arguments: .                    */
/* height - a whole number representing the height of the rectangle.         */
/* width - a whole number representing the width of the rectangle.           */
/* colour - a string that specifies the colour of the rectangle.             */
/* indent - a whole number which specifies the number of spaces the          */
/* rectangle is indented from the left-hand side of the page.                */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var outputString = '<TT>';
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    for (lines = 0; lines < height; lines = lines + 1)
    {
        outputString = outputString + spaces(indent) + stars(width) + newLine()
    };
    outputString = outputString + '</TT>';
    outputString = outputString.fontsize(2);
    document.write(outputString.fontcolor(colour))
};
/****************************End of function********************************/


function drawLeftArrow(length, colour, indent)
/*****************************************************************************/
/* Function draws a left pointing arrow line and takes three arguments:      */
/* length - a whole number representing the length of the arrow.             */
/* colour - a string that specifies the colour of the arrow.                 */
/* indent - a whole number which specifies the number of spaces the          */
/* arrow is indented from the left-hand side of the page.                    */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    drawAcuteLine(3, theColour, 1 + indent);
    drawLine(length, colour, indent);
    drawAgraveLine(3, theColour, 1 + indent)
};
/****************************End of function********************************/



function drawRightArrow(length, colour, indent)
/*****************************************************************************/
/* Function draws a right pointing arrow line and takes three arguments:     */
/* length - a whole number representing the length of the arrow.             */
/* colour - a string that specifies the colour of the arrow.                 */
/* indent - a whole number which specifies the number of spaces the          */
/* arrow is indented from the left-hand side of the page.                    */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    drawAgraveLine(3, theColour, length - 4 + indent);
    drawLine(length, theColour, indent);
    drawAcuteLine(3, theColour, length - 4 + indent)
};
/****************************End of function********************************/




function drawDiamond(width, colour, indent)
/*****************************************************************************/
/* Function draws a diamond and takes three arguments:                       */
/* width - a whole number representing the width of the diamond.             */
/* colour - a string that specifies the colour of the diamond.               */
/* indent - a whole number which specifies the number of spaces the          */
/* diamond is indented from the left-hand side of the page.                  */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var outputString = '<TT>';
    var noOfStars = 1;
    var theColour = colour;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    for (var lines = width - 4; lines > 0; lines = lines - 1)
    {
        outputString = outputString + spaces(indent) + spaces(lines - 1) + stars(noOfStars) + newLine();
        noOfStars = noOfStars + 2
    };
    noOfStars = width;
    for (var lines = 1; lines < width - 2; lines = lines + 1)
    {
        outputString = outputString  + spaces(lines) + stars(noOfStars) + newLine();
        noOfStars = noOfStars - 2
    };
    outputString = outputString  + '</TT>';
    outputString = outputString.fontsize(2);
    document.write(outputString.fontcolor(theColour))
};
/****************************End of function********************************/




function drawPyramid(height, colour, indent)
/*****************************************************************************/
/* Function draws a pyramid-like triangle and takes three arguments:         */
/* height - a whole number representing the height of the diamond.           */
/* colour - a string that specifies the colour of the diamond.               */
/* indent - a whole number which specifies the number of spaces the          */
/* pyramid is indented from the left-hand side of the page.                  */
/* Function returns no value.                                                */
/*****************************************************************************/
{
    var outputString = '<TT>';
    var noOfStars = 1;
    var theColour = colour;
    var width = height + height - 1;
    if (typeof theColour == 'undefined')
    {
        theColour = 'black'
    };
    for (var lines = height; lines > 0; lines = lines - 1)
    {
        outputString = outputString + spaces(indent) + spaces(lines - 1) + stars(noOfStars) + newLine();
        noOfStars = noOfStars + 2
    };
    noOfStars = width;
    outputString = outputString  + '</TT>';
    outputString = outputString.fontsize(2);
    document.write(outputString.fontcolor(theColour))
};
/****************************End of function********************************/
import os, json

# Change the file name to the corresponding JSON file name, and keep it in the same folder
data_file_path = os.path.join(os.path.dirname(__file__), "canadian_aviation.json")
# JSON has to be opened using utf-8 encoding because it won't decode the file if we're using left and right double quotes that are needed for the texts.
data = json.load(open(data_file_path, encoding="utf-8"))

# Loops through the sections
for section in data["sections"]:
    # Prints the section title
    print(
        f'------------------------------ {section["section_number"]} {section["section_name"]} ------------------------------\n'
    )
    # Here starts the question from the looped section
    questions = section["section_questions"]
    # Starts looping throught the various questions from the section
    for i in range(len(questions)):
        # Questions 2.01, 2.02, 2.03 or 2.04: it should print in a text box
        match questions[i]["question_number"]:
            case "2.01" | "2.02" | "2.03" | "2.04":
                print(
                    f"{questions[i]['question_number']} {questions[i]['question_text']}"
                )
                # Prints table header
                print(f"in flight                   on the ground")
                print("-----------------------------------------------")

                question_choice = questions[i]["question_choice"]

                # Loopt through each choice
                for j in range(len(question_choice)):
                    array_check = question_choice[j]
                    # Checks it the type is an array and longer than 2 items
                    if isinstance(array_check, list) and len(array_check) >= 2:
                        # Loops through the 2 item array and prints each line:          (1) cleared to land;    |     cleared to taxi.
                        for k in range(len(array_check)):
                            if k == 0:
                                print(f"{j+1}. {array_check[k]}", end="")
                            else:
                                print(f"  |     {array_check[k]}")
                    else:
                        print(f"{j+1}. {question_choice[j]}")

                print("-----------------------------------------------")

                # Prints the answer partially formatted like the table
                answer_key = questions[i]["answer_key"]
                answer = questions[i]["question_choice"][int(answer_key) - 1]

                if isinstance(answer, list) and len(answer) >= 2:
                    for k in range(len(answer)):
                        if k == 0:
                            print(f"Answer: {answer_key}. {answer[k]}", end="")
                        else:
                            print(f"  |     {answer[k]}")
                else:
                    print(f"Answer: {answer_key}. {answer}")

            # Questions 5.01, 5.11 should print a list, multidimensional array
            case "5.01" | "5.11":
                line = questions[i]["question_text"]

                for k in range(len(line)):
                    # Loops through the first question line and prints it
                    if k == 0:
                        print(f"{questions[i]['question_number']} {line[k][0]}")
                    else:
                        # Then it loops through the ordered list and prints it
                        ordered_list = questions[i]["question_text"][k]
                        for l in range(len(ordered_list)):
                            print(f"  {ordered_list[l][0]}")

                # Prints the choices from each question
                question_choice = questions[i]["question_choice"]

                for j in range(len(question_choice)):
                    array_check = question_choice[j]

                    # Checks it the type is an array and longer than 2 items
                    if isinstance(array_check, list) and len(array_check) >= 2:
                        for k in range(len(array_check)):
                            if k == 0:
                                print(f"{j+1}. {array_check[k]}")
                            else:
                                print(f"       {array_check[k]}")

                    else:
                        print(f"{j+1}. {question_choice[j]}")

                # Prints the answer
                answer_key = questions[i]["answer_key"]
                answer = questions[i]["question_choice"][int(answer_key) - 1]

                print(f"Answer: {answer_key}. {answer}")

            # Case 9.09 should print the question point times and the hour:time on it's side
            case "9.09":
                line = questions[i]["question_text"]

                for j in range(len(line)):
                    if j == 0:
                        print(
                            f"{questions[i]['question_number']} {line[j][0]}     {line[j][1]}"
                        )
                    elif j == 3:
                        print(f"{line[j][0]}")
                    else:
                        print(f"{line[j][0]}     {line[j][1]}")

                # Prints the choices from each question
                question_choice = questions[i]["question_choice"]

                for j in range(len(question_choice)):
                    array_check = question_choice[j]

                    # Checks it the type is an array and longer than 2 items
                    if isinstance(array_check, list) and len(array_check) >= 2:
                        for k in range(len(array_check)):
                            if k == 0:
                                print(f"{j+1}. {array_check[k]}")
                            else:
                                print(f"       {array_check[k]}")
                    else:
                        print(f"{j+1}. {question_choice[j]}")

                # Prints the answer
                answer_key = questions[i]["answer_key"]
                answer = questions[i]["question_choice"][int(answer_key) - 1]
                print(f"Answer: {answer_key}. {answer}")
            # If it's none of the above numbers, it should print the question this function
            case _:
                print(
                    f"{questions[i]['question_number']} {questions[i]['question_text']}"
                )

                # Prints the choices from each question
                question_choice = questions[i]["question_choice"]

                for j in range(len(question_choice)):
                    array_check = question_choice[j]

                    # Checks it the type is an array and longer than 2 items
                    if isinstance(array_check, list) and len(array_check) >= 2:
                        for k in range(len(array_check)):
                            if k == 0:
                                print(f"{j+1}. {array_check[k]}")
                            else:
                                print(f"       {array_check[k]}")
                    else:
                        print(f"{j+1}. {question_choice[j]}")

                # Prints the answer
                answer_key = questions[i]["answer_key"]
                answer = questions[i]["question_choice"][int(answer_key) - 1]
                # Checks it the type is an array and longer than 2 items
                if isinstance(answer, list) and len(answer) >= 2:
                    for k in range(len(answer)):
                        if k == 0:
                            print(f"Answer: {answer_key}. {answer[k]}")
                        else:
                            print(f"               {answer[k]}")
                else:
                    print(f"Answer: {answer_key}. {answer}")

        # After printing that question informations, it prints it's reference
        references = questions[i]["question_reference"]
        for j in range(len(references)):
            if j == 0:
                print(f"Question reference: {references[j]}")
            else:
                print(f"                    {references[j]}")
        print()
